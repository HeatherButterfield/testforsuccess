import connexion
import six

from swagger_server.models.quiz import Quiz  # noqa: E501
from swagger_server import util


def add_quiz(body):  # noqa: E501
    """Add new quiz

     # noqa: E501

    :param body: Quiz object that needs added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Quiz.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_quiz(quizId):  # noqa: E501
    """Deletes a quiz

     # noqa: E501

    :param quizId: Quiz id to delete
    :type quizId: int

    :rtype: None
    """
    return 'do some magic!'


def get_quiz_by_id(quizId):  # noqa: E501
    """Find Quiz by ID

    Returns a single quiz # noqa: E501

    :param quizId: ID of quiz to return
    :type quizId: int

    :rtype: Quiz
    """
    return 'do some magic!'


def update_quiz(body):  # noqa: E501
    """Update existing quiz

     # noqa: E501

    :param body: Quiz object that needs to be added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Quiz.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
