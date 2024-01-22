from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from database import Base


# class Question(Base):
#     __tablename__ = "question"

#     id = Column(Integer, primary_key=True)
#     subject = Column(String, nullable=False)
#     content = Column(Text, nullable=False)
#     create_date = Column(DateTime, nullable=False)
#     user_id = Column(Integer, ForeignKey("user.id"), nullable=True)
#     user = relationship("User", backref="question_users")


# class Answer(Base):
#     __tablename__ = "answer"

#     id = Column(Integer, primary_key=True)
#     content = Column(Text, nullable=False)
#     create_date = Column(DateTime, nullable=False)
#     question_id = Column(Integer, ForeignKey("question.id"))
#     question = relationship("Question", backref="answers")
#     user_id = Column(Integer, ForeignKey("user.id"), nullable=True)
#     user = relationship("User", backref="answer_users")


class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)

class Post(Base):
    __tablename__ = "post"
    id = Column(Integer, primary_key=True)
    # word = Column(String, nullable=False)
    create_date = Column(DateTime, nullable=False)
    image_path = Column(String, nullable=False)
    analyze_text = Column(Text, nullable=False)
    human_relationship = Column(Integer, nullable=False)
    anxiety = Column(Integer, nullable=False)
    depression = Column(Integer, nullable=False)
    stability = Column(Integer, nullable=False)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=True)
    user = relationship("User", backref="post_users")
