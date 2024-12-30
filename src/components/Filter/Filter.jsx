import { SearchLabel, SearchInput } from '../App.Styled';

export const Filter = ({ value, onChange }) => (
  <SearchLabel>
    Find contacts by name
    <SearchInput type="text" value={value} onChange={onChange} />
  </SearchLabel>
);
