from datetime import datetime
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse

from domain.post.post_schema import PostCreate
from models import Post, User
from sqlalchemy.orm import Session
import aiofiles

from function import analyze_mental, analyze_scoring

UPLOAD_DIRECTORY = "images"


def get_post_list(db: Session, skip: int = 0, limit: int = 10):
    _post_list = db.query(Post)\
        .order_by({Post}.create_date.desc())

    total = _post_list.count()
    post_list = _post_list.offset(skip).limit(limit).all()
    return total, post_list  # (전체 건수, 페이징 적용된 질문 목록)


def get_post(db: Session, post_id: int):
    post = db.query(Post).get(post_id)
    return post


async def create_post(db: Session, post_create: PostCreate, user: User, file: UploadFile = File(...)):
    file_location = ''.join([datetime.now(),secrets.token_hex(16)])

    async with aiofiles.open(file_location, 'wb') as out_file:
        content = await file.read()  # 파일 내용 읽기
        await out_file.write(content)  # 파일 저장
    
    analyze_text = analyze_mental(post_create.word)
    analyze_text_list = analyze_scoring(post_create.image_path)
    
    db_post = Post(word=post_create.word,
                        create_date=datetime.now(),
                        image_path=post_create.image_path,
                        analyze_text=analyze_text,
                        human_relationship=analyze_text_list[0],
                        anxiety=analyze_text_list[1],
                        depression=analyze_text_list[2],
                        stability=analyze_text_list[3],
                        user=user,
                        )

    db.add(db_post)
    db.commit()