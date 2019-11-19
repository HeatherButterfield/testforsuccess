# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Problems(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, id: int=None, prob_text: str=None, current_step: int=None, answer: bool=None, next_step: int=None):  # noqa: E501
        """Problems - a model defined in Swagger

        :param id: The id of this Problems.  # noqa: E501
        :type id: int
        :param prob_text: The prob_text of this Problems.  # noqa: E501
        :type prob_text: str
        :param current_step: The current_step of this Problems.  # noqa: E501
        :type current_step: int
        :param answer: The answer of this Problems.  # noqa: E501
        :type answer: bool
        :param next_step: The next_step of this Problems.  # noqa: E501
        :type next_step: int
        """
        self.swagger_types = {
            'id': int,
            'prob_text': str,
            'current_step': int,
            'answer': bool,
            'next_step': int
        }

        self.attribute_map = {
            'id': 'id',
            'prob_text': 'probText',
            'current_step': 'currentStep',
            'answer': 'answer',
            'next_step': 'nextStep'
        }

        self._id = id
        self._prob_text = prob_text
        self._current_step = current_step
        self._answer = answer
        self._next_step = next_step

    @classmethod
    def from_dict(cls, dikt) -> 'Problems':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Problems of this Problems.  # noqa: E501
        :rtype: Problems
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this Problems.


        :return: The id of this Problems.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this Problems.


        :param id: The id of this Problems.
        :type id: int
        """

        self._id = id

    @property
    def prob_text(self) -> str:
        """Gets the prob_text of this Problems.


        :return: The prob_text of this Problems.
        :rtype: str
        """
        return self._prob_text

    @prob_text.setter
    def prob_text(self, prob_text: str):
        """Sets the prob_text of this Problems.


        :param prob_text: The prob_text of this Problems.
        :type prob_text: str
        """

        self._prob_text = prob_text

    @property
    def current_step(self) -> int:
        """Gets the current_step of this Problems.


        :return: The current_step of this Problems.
        :rtype: int
        """
        return self._current_step

    @current_step.setter
    def current_step(self, current_step: int):
        """Sets the current_step of this Problems.


        :param current_step: The current_step of this Problems.
        :type current_step: int
        """

        self._current_step = current_step

    @property
    def answer(self) -> bool:
        """Gets the answer of this Problems.


        :return: The answer of this Problems.
        :rtype: bool
        """
        return self._answer

    @answer.setter
    def answer(self, answer: bool):
        """Sets the answer of this Problems.


        :param answer: The answer of this Problems.
        :type answer: bool
        """

        self._answer = answer

    @property
    def next_step(self) -> int:
        """Gets the next_step of this Problems.


        :return: The next_step of this Problems.
        :rtype: int
        """
        return self._next_step

    @next_step.setter
    def next_step(self, next_step: int):
        """Sets the next_step of this Problems.


        :param next_step: The next_step of this Problems.
        :type next_step: int
        """

        self._next_step = next_step