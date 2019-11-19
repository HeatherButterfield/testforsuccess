# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Quiz(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, id: int=None, teacher_id: int=None, problem: List[int]=None):  # noqa: E501
        """Quiz - a model defined in Swagger

        :param id: The id of this Quiz.  # noqa: E501
        :type id: int
        :param teacher_id: The teacher_id of this Quiz.  # noqa: E501
        :type teacher_id: int
        :param problem: The problem of this Quiz.  # noqa: E501
        :type problem: List[int]
        """
        self.swagger_types = {
            'id': int,
            'teacher_id': int,
            'problem': List[int]
        }

        self.attribute_map = {
            'id': 'id',
            'teacher_id': 'teacher_id',
            'problem': 'problem'
        }

        self._id = id
        self._teacher_id = teacher_id
        self._problem = problem

    @classmethod
    def from_dict(cls, dikt) -> 'Quiz':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Quiz of this Quiz.  # noqa: E501
        :rtype: Quiz
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this Quiz.


        :return: The id of this Quiz.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this Quiz.


        :param id: The id of this Quiz.
        :type id: int
        """

        self._id = id

    @property
    def teacher_id(self) -> int:
        """Gets the teacher_id of this Quiz.


        :return: The teacher_id of this Quiz.
        :rtype: int
        """
        return self._teacher_id

    @teacher_id.setter
    def teacher_id(self, teacher_id: int):
        """Sets the teacher_id of this Quiz.


        :param teacher_id: The teacher_id of this Quiz.
        :type teacher_id: int
        """

        self._teacher_id = teacher_id

    @property
    def problem(self) -> List[int]:
        """Gets the problem of this Quiz.


        :return: The problem of this Quiz.
        :rtype: List[int]
        """
        return self._problem

    @problem.setter
    def problem(self, problem: List[int]):
        """Sets the problem of this Quiz.


        :param problem: The problem of this Quiz.
        :type problem: List[int]
        """

        self._problem = problem