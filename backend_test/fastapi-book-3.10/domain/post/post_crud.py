from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse

# from domain.post.post_schema import PostCreate
from models import Post, User
from sqlalchemy.orm import Session
from function import analyze_mental, analyze_scoring

from datetime import datetime
import aiofiles
import secrets
import os



BASE_DIR = os.path.join('../', os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
STATIC_DIR = os.path.join(BASE_DIR,'static/')
IMG_DIR = os.path.join(STATIC_DIR,'images/')
SERVER_IMG_DIR = os.path.join('http://localhost:8000/','static/','images/')

def create_post(db: Session,  user: User, file):
    currentTime = datetime.now().strftime("%Y%m%d%H%M%S")
    saved_file_name = ''.join([currentTime,secrets.token_hex(16)])
    file_location = os.path.join(IMG_DIR,saved_file_name)
    with open(file_location+'.jpg', "wb+") as file_object:
        file_object.write(file.file.read())

    # analyze_text = analyze_mental(post_create.word)
    # analyze_text_list = analyze_scoring(post_create.image_path)
    
    # analyze_text = 'asfds'
    # analyze_text_list = [1,2,3,4]

    db_post = Post(
                        # word=post_create.word,
                        create_date=datetime.now(),
                        image_path=file.filename,
                        # analyze_text=analyze_text,
                        # human_relationship=analyze_text_list[0],
                        # anxiety=analyze_text_list[1],
                        # depression=analyze_text_list[2],
                        # stability=analyze_text_list[3],
                        analyze_text='asdfa',
                        human_relationship=1,
                        anxiety=2,
                        depression=3,
                        stability=4,
                        user=user,
                        )

    db.add(db_post)
    db.commit()

def get_post_list(db: Session, skip: int = 0, limit: int = 10):
    _post_list = db.query(Post)\
        .order_by({Post}.create_date.desc())

    total = _post_list.count()
    post_list = _post_list.offset(skip).limit(limit).all()
    return total, post_list  # (전체 건수, 페이징 적용된 질문 목록)


def get_post(db: Session, post_id: int):
    post = db.query(Post).get(post_id)
    return post

