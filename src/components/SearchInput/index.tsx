import React, { FC } from 'react';
import style from './SearchInput.module.scss';
import searchIcon from '../../assets/svg/searchIcon.svg';

interface ISearchInput {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeHolder: string;
}

const SearchInput: FC<ISearchInput> = ({ onChange, placeHolder }) => {
  return (
    <div>
      <input
        onChange={onChange}
        placeholder={placeHolder}
        className={style.search_input}
        style={{
          background: `url(${searchIcon}) no-repeat center right 8px`,

          backgroundColor: 'white',
        }}
      />
    </div>
  );
};
export default SearchInput;
