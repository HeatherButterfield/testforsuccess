import connexion
import six

from swagger_server.models.problems import Problems  # noqa: E501
from swagger_server import util


def add_problem(body):  # noqa: E501
    """Add new problem

     # noqa: E501

    :param body: Problem object that needs added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Problems.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_problem(problemId):  # noqa: E501
    """Deletes a problem

     # noqa: E501

    :param problemId: Problem id to delete
    :type problemId: int

    :rtype: None
    """
    return 'do some magic!'


def get_problem_by_id(problemId):  # noqa: E501
    """Find Problem by ID

    Returns a single problem # noqa: E501

    :param problemId: ID of problem to return
    :type problemId: int

    :rtype: Problems
    """
    return 'do some magic!'


def update_problem(body):  # noqa: E501
    """Update existing problem

     # noqa: E501

    :param body: Problem object that needs to be added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Problems.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
