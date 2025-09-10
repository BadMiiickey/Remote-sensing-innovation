from datetime import datetime
from bson import ObjectId
from typing import Any, Dict, Final, Type, Callable, List

class FormatHelper:
    TYPE_HANDLE_CONFIG: Final[Dict[Type, Callable[[Any], Any]]] = {
        ObjectId: str,
        datetime: lambda dt: dt.isoformat() + 'Z'
    }

    @classmethod
    def jsonOrList(cls, data: Any) -> Any:
        if (data is None): return None

        handler = cls.TYPE_HANDLE_CONFIG.get(type(data))

        if (handler): return handler(data)
        if (isinstance(data, Dict)): return { key: cls.jsonOrList(value) for (key, value) in data.items() }
        if (isinstance(data, List)): return [cls.jsonOrList(item) for item in data]

        return data
