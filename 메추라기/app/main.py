from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
import sqlite3
import aiofiles
import os

app = FastAPI()

# SQLite 데이터베이스 연결 및 테이블 생성
conn = sqlite3.connect('images.db', check_same_thread=False)
cursor = conn.cursor()
cursor.execute("""
    CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        file_path TEXT
    )
""")
conn.commit()

# 이미지 파일 업로드 경로 설정 ('images' 폴더)
UPLOAD_DIRECTORY = "images"
if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    file_location = f"{UPLOAD_DIRECTORY}/{file.filename}"
    async with aiofiles.open(file_location, 'wb') as out_file:
        content = await file.read()  # 파일 내용 읽기
        await out_file.write(content)  # 파일 저장

    # 파일 경로를 데이터베이스에 저장
    cursor.execute("INSERT INTO images (file_path) VALUES (?)", (file_location,))
    conn.commit()

    return {"info": f"file '{file.filename}' saved at '{file_location}'"}

@app.get("/download/{file_name}")
async def download_image(file_name: str):
    cursor.execute("SELECT file_path FROM images WHERE file_path LIKE ?", (f'%{file_name}',))
    file_record = cursor.fetchone()

    if file_record:
        file_location = file_record[0]
        if os.path.exists(file_location):
            return FileResponse(file_location)
        else:
            raise HTTPException(status_code=404, detail="File not found")
    else:
        raise HTTPException(status_code=404, detail="File not found in database")

# SQLite 연결 종료
@app.on_event("shutdown")
def shutdown_event():
    conn.close()