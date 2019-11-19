# coding: utf-8

"""
    Test_4_Success

    API for Test4Success  # noqa: E501

    OpenAPI spec version: 1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class Quiz(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'id': 'int',
        'teacher_id': 'int',
        'problem': 'list[int]'
    }

    attribute_map = {
        'id': 'id',
        'teacher_id': 'teacher_id',
        'problem': 'problem'
    }

    def __init__(self, id=None, teacher_id=None, problem=None):  # noqa: E501
        """Quiz - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._teacher_id = None
        self._problem = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if teacher_id is not None:
            self.teacher_id = teacher_id
        if problem is not None:
            self.problem = problem

    @property
    def id(self):
        """Gets the id of this Quiz.  # noqa: E501


        :return: The id of this Quiz.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Quiz.


        :param id: The id of this Quiz.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def teacher_id(self):
        """Gets the teacher_id of this Quiz.  # noqa: E501


        :return: The teacher_id of this Quiz.  # noqa: E501
        :rtype: int
        """
        return self._teacher_id

    @teacher_id.setter
    def teacher_id(self, teacher_id):
        """Sets the teacher_id of this Quiz.


        :param teacher_id: The teacher_id of this Quiz.  # noqa: E501
        :type: int
        """

        self._teacher_id = teacher_id

    @property
    def problem(self):
        """Gets the problem of this Quiz.  # noqa: E501


        :return: The problem of this Quiz.  # noqa: E501
        :rtype: list[int]
        """
        return self._problem

    @problem.setter
    def problem(self, problem):
        """Sets the problem of this Quiz.


        :param problem: The problem of this Quiz.  # noqa: E501
        :type: list[int]
        """

        self._problem = problem

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(Quiz, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, Quiz):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other