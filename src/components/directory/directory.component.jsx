import { DirectoryContainer } from './directory.style';
import DirectoryItem from '../directory-item/directory-item.component'

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;