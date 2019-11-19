# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.quiz import Quiz  # noqa: E501
from swagger_server.test import BaseTestCase


class TestQuizController(BaseTestCase):
    """QuizController integration test stubs"""

    def test_add_quiz(self):
        """Test case for add_quiz

        Add new quiz
        """
        body = Quiz()
        response = self.client.open(
            '/dfdl2gmjf1u73c/quiz',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_quiz(self):
        """Test case for delete_quiz

        Deletes a quiz
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/quiz/{quizId}'.format(quizId=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_quiz_by_id(self):
        """Test case for get_quiz_by_id

        Find Quiz by ID
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/quiz/{quizId}'.format(quizId=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_quiz(self):
        """Test case for update_quiz

        Update existing quiz
        """
        body = Quiz()
        response = self.client.open(
            '/dfdl2gmjf1u73c/quiz',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
