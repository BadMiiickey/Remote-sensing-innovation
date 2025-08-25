from core.utils.type.Phenomena import Phenomena
from core.utils.type.Stats import Stats
from core.utils.type.TimeNode import TimeNode

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
