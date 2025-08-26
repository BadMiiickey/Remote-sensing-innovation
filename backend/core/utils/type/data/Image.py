from backend.core.utils.type.data.Phenomena import Phenomena
from backend.core.utils.type.data.Stats import Stats
from backend.core.utils.type.data.TimeNode import TimeNode

from bson import ObjectId
from dataclasses import dataclass, field
from typing import List, Optional

@dataclass
class Image:
    path: str
    tags: List[str]
    phenomena: List[Phenomena]
    timeNode: TimeNode
    stats: Stats
    _id: Optional[ObjectId] = field(default=None)
