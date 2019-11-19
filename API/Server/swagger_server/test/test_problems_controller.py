# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.problems import Problems  # noqa: E501
from swagger_server.test import BaseTestCase


class TestProblemsController(BaseTestCase):
    """ProblemsController integration test stubs"""

    def test_add_problem(self):
        """Test case for add_problem

        Add new problem
        """
        body = Problems()
        response = self.client.open(
            '/dfdl2gmjf1u73c/problem',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_problem(self):
        """Test case for delete_problem

        Deletes a problem
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/problem/{problemId}'.format(problemId=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_problem_by_id(self):
        """Test case for get_problem_by_id

        Find Problem by ID
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/problem/{problemId}'.format(problemId=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_problem(self):
        """Test case for update_problem

        Update existing problem
        """
        body = Problems()
        response = self.client.open(
            '/dfdl2gmjf1u73c/problem',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
