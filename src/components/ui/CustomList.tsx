import { cn } from '@/lib/utils';
import type { ClassValue } from 'clsx';
import type { LinkItem } from '@/types/link-item';

interface Props {
  title?: string;
  listInfo?: LinkItem[];
  itemStyle?: ClassValue;
  horizontal?: boolean;
}

export const CustomList = ({
  title,
  listInfo = [],
  horizontal = true,
  itemStyle,
}: Props) => {
  return (
    <div>
      {title && <h4 className="mb-4 font-semibold">{title}</h4>}
      <ul className={`flex gap-3 ${horizontal ? '' : 'flex-col'}`}>
        {listInfo.map((item, i) => (
          <li key={i}>
            <a
              href={item.link}
              className={cn(
                'text-background/80 hover:text-primary transition-colors',
                itemStyle
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
