'use client';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type DragDropListProps = {
  layout?: 'vertical' | 'horizontal' | 'grid';
  itemCount?: number;
};

const DragDropList = ({
  layout = 'vertical',
  itemCount = 10,
}: DragDropListProps) => {
  const [sortedCourseList, setSortedCourseList] = useState<
    {
      id: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    const array = [];

    for (let i = 0; i < itemCount; ++i) {
      array.push({
        id: String(i),
        label: String(i),
      });
    }

    setSortedCourseList(array);
  }, []);

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (active && over) {
      const oldIndex = sortedCourseList.findIndex(
        (item) => item.id === active.id,
      );
      const newIndex = sortedCourseList.findIndex(
        (item) => item.id === over.id,
      );
      const newItems = [...sortedCourseList];

      setSortedCourseList(arrayMove(newItems, oldIndex, newIndex));
    }
  }

  // 並びの向き
  const strategy =
    layout === 'horizontal'
      ? horizontalListSortingStrategy
      : layout === 'grid'
        ? rectSortingStrategy
        : verticalListSortingStrategy;

  const containerStyle: React.CSSProperties =
    layout === 'horizontal'
      ? { display: 'flex', flexDirection: 'row', gap: '8px' }
      : layout === 'grid'
        ? { display: 'flex', flexWrap: 'wrap', gap: '8px' }
        : { display: 'flex', flexDirection: 'column', gap: '8px' };

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={sortedCourseList} strategy={strategy}>
          <div style={containerStyle}>
            {sortedCourseList.map((box) => {
              return (
                <SortableItem key={box.id} id={box.id} label={box.label} />
              );
            })}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

const SortableInner = styled.div`
  margin: auto;
`;

const SortableItem = ({ id, label }: { id: string; label: string }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={{
        background: isDragging ? '#82B1FF' : '#2962FF',
        color: isDragging ? '#212121' : '#FAFAFA',
        cursor: isDragging ? 'grabbing' : 'grab',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 16,
        position: 'relative',
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 1 : 'auto',
        width: 50,
        height: 50,
      }}
    >
      <SortableInner>{label}</SortableInner>
    </div>
  );
};

export default DragDropList;
