import { CategoryPreviewContainer, Title, Preview } from './category-preview.style';

import ProdcutCard from '../../components/product-card/product-card.component'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProdcutCard key={product.id} product={product}/>
        ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;