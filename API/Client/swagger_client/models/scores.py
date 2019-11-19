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


class Scores(object):
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
        'student_id': 'int',
        'teacher_id': 'int',
        'quiz_id': 'int',
        'score': 'float'
    }

    attribute_map = {
        'id': 'id',
        'student_id': 'student_id',
        'teacher_id': 'teacher_id',
        'quiz_id': 'quiz_id',
        'score': 'score'
    }

    def __init__(self, id=None, student_id=None, teacher_id=None, quiz_id=None, score=None):  # noqa: E501
        """Scores - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._student_id = None
        self._teacher_id = None
        self._quiz_id = None
        self._score = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if student_id is not None:
            self.student_id = student_id
        if teacher_id is not None:
            self.teacher_id = teacher_id
        if quiz_id is not None:
            self.quiz_id = quiz_id
        if score is not None:
            self.score = score

    @property
    def id(self):
        """Gets the id of this Scores.  # noqa: E501


        :return: The id of this Scores.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Scores.


        :param id: The id of this Scores.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def student_id(self):
        """Gets the student_id of this Scores.  # noqa: E501


        :return: The student_id of this Scores.  # noqa: E501
        :rtype: int
        """
        return self._student_id

    @student_id.setter
    def student_id(self, student_id):
        """Sets the student_id of this Scores.


        :param student_id: The student_id of this Scores.  # noqa: E501
        :type: int
        """

        self._student_id = student_id

    @property
    def teacher_id(self):
        """Gets the teacher_id of this Scores.  # noqa: E501


        :return: The teacher_id of this Scores.  # noqa: E501
        :rtype: int
        """
        return self._teacher_id

    @teacher_id.setter
    def teacher_id(self, teacher_id):
        """Sets the teacher_id of this Scores.


        :param teacher_id: The teacher_id of this Scores.  # noqa: E501
        :type: int
        """

        self._teacher_id = teacher_id

    @property
    def quiz_id(self):
        """Gets the quiz_id of this Scores.  # noqa: E501


        :return: The quiz_id of this Scores.  # noqa: E501
        :rtype: int
        """
        return self._quiz_id

    @quiz_id.setter
    def quiz_id(self, quiz_id):
        """Sets the quiz_id of this Scores.


        :param quiz_id: The quiz_id of this Scores.  # noqa: E501
        :type: int
        """

        self._quiz_id = quiz_id

    @property
    def score(self):
        """Gets the score of this Scores.  # noqa: E501


        :return: The score of this Scores.  # noqa: E501
        :rtype: float
        """
        return self._score

    @score.setter
    def score(self, score):
        """Sets the score of this Scores.


        :param score: The score of this Scores.  # noqa: E501
        :type: float
        """

        self._score = score

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
        if issubclass(Scores, dict):
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
        if not isinstance(other, Scores):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
