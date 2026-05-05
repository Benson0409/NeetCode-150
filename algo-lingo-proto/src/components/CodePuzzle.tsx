import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

interface SortableItemProps {
  id: string;
  code: string;
  indentLevel: number;
}

function SortableItem({ id, code, indentLevel }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    marginLeft: `${indentLevel * 1.5}rem`,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 p-3 mb-2 rounded-lg border-2 ${
        isDragging
          ? 'bg-white border-[#aa3bff] shadow-lg'
          : 'bg-slate-50 border-slate-200 shadow-sm'
      }`}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab hover:text-[#aa3bff] text-slate-400 p-1"
      >
        <GripVertical size={20} />
      </div>
      <code className="text-sm font-mono text-slate-800 whitespace-pre">{code}</code>
    </div>
  );
}

interface CodePuzzleProps {
  blocks: { id: string; code: string }[];
  onOrderChange: (newBlocks: { id: string; code: string }[]) => void;
}

export function CodePuzzle({ blocks, onOrderChange }: CodePuzzleProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = blocks.findIndex((b) => b.id === active.id);
      const newIndex = blocks.findIndex((b) => b.id === over.id);
      onOrderChange(arrayMove(blocks, oldIndex, newIndex));
    }
  };

  // 動態計算縮排邏輯 (基於當前順序)
  let currentIndent = 0;
  const blocksWithIndent = blocks.map((block) => {
    let indent = currentIndent;
    
    // 特殊的反縮排規則 (針對此題)
    if (block.code === 'return False') {
      indent = 0;
      currentIndent = 0;
    } else if (block.code === 'seen.add(num)') {
      // 在 for 迴圈內的平行邏輯，通常是縮排 1
      indent = 1;
      currentIndent = 1;
    }
    
    const finalIndent = indent;
    
    // 如果這行結尾是冒號，下一行要縮排
    if (block.code.endsWith(':')) {
      currentIndent = indent + 1;
    }
    
    return { ...block, indentLevel: finalIndent };
  });

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <span>🧩</span> 邏輯拼圖
      </h3>
      <p className="text-slate-500 text-sm mb-4">拖拉下方的程式碼區塊，組合出正確的演算法邏輯：</p>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={blocksWithIndent.map((b) => b.id)}
          strategy={verticalListSortingStrategy}
        >
          {blocksWithIndent.map((block) => (
            <SortableItem key={block.id} id={block.id} code={block.code} indentLevel={block.indentLevel} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
