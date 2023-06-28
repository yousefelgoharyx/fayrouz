import { atom, useRecoilState } from "recoil";
const searchState = atom({
  key: "searchState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const useSearchState = () => {
  return useRecoilState(searchState);
};
