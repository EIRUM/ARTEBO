import datetime

from pydantic import BaseModel, validator

from domain.answer.answer_schema import Answer
from domain.user.user_schema import User


class Post(BaseModel):
    id: int
    word: str
    create_date: datetime.datetime
    image_path: str
    analyze_text: str
    human_relationship: int
    anxiety: int
    depression: int
    stability: int
    user: User | None

    class Config:
        orm_mode = True


class PostCreate(BaseModel):
    word: str
    image_path: str
    @validator('word', 'image_path')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v
    
class PostList(BaseModel):
    total: int = 0
    question_list: list[Post] = []
