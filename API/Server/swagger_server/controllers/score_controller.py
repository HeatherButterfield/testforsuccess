import connexion
import six

from swagger_server.models.scores import Scores  # noqa: E501
from swagger_server import util


def add_score(body):  # noqa: E501
    """Add new score

     # noqa: E501

    :param body: Score object that needs added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Scores.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_score(scoreId):  # noqa: E501
    """Deletes a score

     # noqa: E501

    :param scoreId: Score id to delete
    :type scoreId: int

    :rtype: None
    """
    return 'do some magic!'


def get_score_by_id(scoreId):  # noqa: E501
    """Find Score by ID

    Returns a single score # noqa: E501

    :param scoreId: ID of score to return
    :type scoreId: int

    :rtype: Scores
    """
    return 'do some magic!'


def update_score(body):  # noqa: E501
    """Update existing score

     # noqa: E501

    :param body: Score object that needs to be added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Scores.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
