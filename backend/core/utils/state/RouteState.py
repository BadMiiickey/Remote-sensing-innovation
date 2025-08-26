from core.utils.type.http.Route import Route

from typing import Final

class RouteState:
    INDEX: Final[Route] = Route(route='/api/index', method='GET')