import { ComplexityLevels } from "../../types/helpers";

enum ComplexityTypes {
  SET_COMPLEXITY = "SET_COMPLEXITY",
}

interface ISetComplexityAction {
  type: ComplexityTypes.SET_COMPLEXITY;
  payload: ComplexityLevels;
}

export const setComplexityAction = (
  payload: ComplexityLevels
): ISetComplexityAction => {
  return {
    payload,
    type: ComplexityTypes.SET_COMPLEXITY,
  };
};

export default function setComplexityReducer(
  state: ComplexityLevels = ComplexityLevels["Easy, 3-5 prefilled numbers"],
  action: ISetComplexityAction
): ComplexityLevels {
  switch (action.type) {
    case ComplexityTypes.SET_COMPLEXITY:
      return action.payload;
    default:
      return state;
  }
}
