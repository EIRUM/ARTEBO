from fastapi import APIRouter, Depends, UploadFile, File
from starlette.responses import FileResponse
from sqlalchemy.orm import Session
from starlette import status

import os
from database import get_db
from domain.post import post_schema, post_crud
from domain.user.user_router import get_current_user
from models import User

router = APIRouter(
    prefix="/api/post",
)

BASE_DIR = os.path.join('../', os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
STATIC_DIR = os.path.join(BASE_DIR,'static/')
IMG_DIR = os.path.join(STATIC_DIR,'images/')
SERVER_IMG_DIR = os.path.join('http://localhost:8000/','static/','images/')


@router.post("/create", status_code=status.HTTP_204_NO_CONTENT)
def post_create(
                    db: Session = Depends(get_db),
                    current_user: User = Depends(get_current_user), 
                    fileb: UploadFile = File()):
    post_crud.create_post(db=db, 
                                  user=current_user, file=fileb)


@router.get("/list", response_model=post_schema.PostList)
def post_list(db: Session = Depends(get_db),
                  page: int = 0, size: int = 10):
    total, _post_list = post_crud.get_post_list(
        db, skip=page * size, limit=size)
    return {
        'total': total,
        'post_list': _post_list
    }


@router.get("/detail/{post_id}", response_model=post_schema.Post)
def post_detail(post_id: int, db: Session = Depends(get_db)):
    post = post_crud.get_post(db, post_id=post_id)
    return post


@router.get("/images/{post_id}", response_model=post_schema.Post)
def post_images(post_id: int, db: Session = Depends(get_db)):
    post = post_crud.get_post(db, post_id=post_id)
    return FileResponse(f"{post.image_path}.jpg")