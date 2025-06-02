import Category from '@/components/ui/Category';
import { getCategoryLabel, categoryList } from '@/lib/post';

interface CategoryFilterProps {
  curCategory?: string;
}

const CategoryFilter = ({ curCategory }: CategoryFilterProps) => {
  const categories = categoryList;
  return (
    <div>
      <div className="section-heading-semibold">
        {curCategory ? getCategoryLabel(curCategory) : 'Everything'}
      </div>
      <div className="my-4 flex flex-wrap gap-x-3">
        <Category
          key={'all'}
          name={'All Posts'}
          href={`/posts`}
          className={`hover:underline ${curCategory ? `text-muted-foreground` : `text-primary`}`}
        />
        {categories.map((category) => (
          <Category
            key={category.key}
            name={category.label}
            href={`/posts/${category.key}`}
            className={`hover:underline ${curCategory && curCategory === category.key ? `text-primary` : `text-muted-foreground`}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
