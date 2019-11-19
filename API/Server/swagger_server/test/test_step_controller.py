# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.step import Step  # noqa: E501
from swagger_server.test import BaseTestCase


class TestStepController(BaseTestCase):
    """StepController integration test stubs"""

    def test_add_step(self):
        """Test case for add_step

        Add new step
        """
        body = Step()
        response = self.client.open(
            '/dfdl2gmjf1u73c/step',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_step(self):
        """Test case for delete_step

        Deletes a step
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/step/{stepId}'.format(stepId=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_step_by_id(self):
        """Test case for get_step_by_id

        Find Step by ID
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/step/{stepId}'.format(stepId=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_step(self):
        """Test case for update_step

        Update existing step
        """
        body = Step()
        response = self.client.open(
            '/dfdl2gmjf1u73c/step',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
