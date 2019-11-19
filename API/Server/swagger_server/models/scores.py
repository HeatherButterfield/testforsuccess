# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Scores(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, id: int=None, student_id: int=None, teacher_id: int=None, quiz_id: int=None, score: float=None):  # noqa: E501
        """Scores - a model defined in Swagger

        :param id: The id of this Scores.  # noqa: E501
        :type id: int
        :param student_id: The student_id of this Scores.  # noqa: E501
        :type student_id: int
        :param teacher_id: The teacher_id of this Scores.  # noqa: E501
        :type teacher_id: int
        :param quiz_id: The quiz_id of this Scores.  # noqa: E501
        :type quiz_id: int
        :param score: The score of this Scores.  # noqa: E501
        :type score: float
        """
        self.swagger_types = {
            'id': int,
            'student_id': int,
            'teacher_id': int,
            'quiz_id': int,
            'score': float
        }

        self.attribute_map = {
            'id': 'id',
            'student_id': 'student_id',
            'teacher_id': 'teacher_id',
            'quiz_id': 'quiz_id',
            'score': 'score'
        }

        self._id = id
        self._student_id = student_id
        self._teacher_id = teacher_id
        self._quiz_id = quiz_id
        self._score = score

    @classmethod
    def from_dict(cls, dikt) -> 'Scores':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Scores of this Scores.  # noqa: E501
        :rtype: Scores
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this Scores.


        :return: The id of this Scores.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this Scores.


        :param id: The id of this Scores.
        :type id: int
        """

        self._id = id

    @property
    def student_id(self) -> int:
        """Gets the student_id of this Scores.


        :return: The student_id of this Scores.
        :rtype: int
        """
        return self._student_id

    @student_id.setter
    def student_id(self, student_id: int):
        """Sets the student_id of this Scores.


        :param student_id: The student_id of this Scores.
        :type student_id: int
        """

        self._student_id = student_id

    @property
    def teacher_id(self) -> int:
        """Gets the teacher_id of this Scores.


        :return: The teacher_id of this Scores.
        :rtype: int
        """
        return self._teacher_id

    @teacher_id.setter
    def teacher_id(self, teacher_id: int):
        """Sets the teacher_id of this Scores.


        :param teacher_id: The teacher_id of this Scores.
        :type teacher_id: int
        """

        self._teacher_id = teacher_id

    @property
    def quiz_id(self) -> int:
        """Gets the quiz_id of this Scores.


        :return: The quiz_id of this Scores.
        :rtype: int
        """
        return self._quiz_id

    @quiz_id.setter
    def quiz_id(self, quiz_id: int):
        """Sets the quiz_id of this Scores.


        :param quiz_id: The quiz_id of this Scores.
        :type quiz_id: int
        """

        self._quiz_id = quiz_id

    @property
    def score(self) -> float:
        """Gets the score of this Scores.


        :return: The score of this Scores.
        :rtype: float
        """
        return self._score

    @score.setter
    def score(self, score: float):
        """Sets the score of this Scores.


        :param score: The score of this Scores.
        :type score: float
        """

        self._score = score
