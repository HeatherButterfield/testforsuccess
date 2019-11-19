# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.scores import Scores  # noqa: E501
from swagger_server.test import BaseTestCase


class TestScoreController(BaseTestCase):
    """ScoreController integration test stubs"""

    def test_add_score(self):
        """Test case for add_score

        Add new score
        """
        body = Scores()
        response = self.client.open(
            '/dfdl2gmjf1u73c/score',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_score(self):
        """Test case for delete_score

        Deletes a score
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/score/{scoreId}'.format(scoreId=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_score_by_id(self):
        """Test case for get_score_by_id

        Find Score by ID
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/score/{scoreId}'.format(scoreId=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_score(self):
        """Test case for update_score

        Update existing score
        """
        body = Scores()
        response = self.client.open(
            '/dfdl2gmjf1u73c/score',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
