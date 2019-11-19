# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Step(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, id: bool=None, answer: bool=None, complete: bool=None):  # noqa: E501
        """Step - a model defined in Swagger

        :param id: The id of this Step.  # noqa: E501
        :type id: bool
        :param answer: The answer of this Step.  # noqa: E501
        :type answer: bool
        :param complete: The complete of this Step.  # noqa: E501
        :type complete: bool
        """
        self.swagger_types = {
            'id': bool,
            'answer': bool,
            'complete': bool
        }

        self.attribute_map = {
            'id': 'id',
            'answer': 'answer',
            'complete': 'complete'
        }

        self._id = id
        self._answer = answer
        self._complete = complete

    @classmethod
    def from_dict(cls, dikt) -> 'Step':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Step of this Step.  # noqa: E501
        :rtype: Step
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> bool:
        """Gets the id of this Step.


        :return: The id of this Step.
        :rtype: bool
        """
        return self._id

    @id.setter
    def id(self, id: bool):
        """Sets the id of this Step.


        :param id: The id of this Step.
        :type id: bool
        """

        self._id = id

    @property
    def answer(self) -> bool:
        """Gets the answer of this Step.


        :return: The answer of this Step.
        :rtype: bool
        """
        return self._answer

    @answer.setter
    def answer(self, answer: bool):
        """Sets the answer of this Step.


        :param answer: The answer of this Step.
        :type answer: bool
        """

        self._answer = answer

    @property
    def complete(self) -> bool:
        """Gets the complete of this Step.


        :return: The complete of this Step.
        :rtype: bool
        """
        return self._complete

    @complete.setter
    def complete(self, complete: bool):
        """Sets the complete of this Step.


        :param complete: The complete of this Step.
        :type complete: bool
        """

        self._complete = complete
