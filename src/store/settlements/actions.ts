import { SettlementType } from '../../globals/types';
import {
  CREATE_ITEM,
  CREATE_ITEM_FAILURE,
  CREATE_ITEM_SUCCESS,
  FETCH_ITEMS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
} from './action-types';

// FETCH_ITEMS
type FetchItemsActionType = {
  type: typeof FETCH_ITEMS;
};

export const fetchItems = (): FetchItemsActionType => ({
  type: FETCH_ITEMS,
});

// FETCH_ITEMS_SUCCESS
type FetchItemsSuccessActionType = {
  type: typeof FETCH_ITEMS_SUCCESS;
  payload: {
    data: SettlementType[];
  };
};

export const fetchItemsSuccess = (
  data: SettlementType[]
): FetchItemsSuccessActionType => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { data },
});

// FETCH_ITEMS_FAILURE
type FetchItemsFailureActionType = {
  type: typeof FETCH_ITEMS_FAILURE;
};

export const fetchItemsFailure = (): FetchItemsFailureActionType => ({
  type: FETCH_ITEMS_FAILURE,
});

// CREATE_ITEM
type CreateItemActionType = {
  type: typeof CREATE_ITEM;
  payload: {
    amount: number;
  };
};

export const createItem = ({
  amount,
}: {
  amount: number;
}): CreateItemActionType => ({
  type: CREATE_ITEM,
  payload: {
    amount,
  },
});

// CREATE_ITEM_SUCCESS
type CreateItemSuccessActionType = {
  type: typeof CREATE_ITEM_SUCCESS;
  payload: {
    data: SettlementType;
  };
};

export const createItemSuccess = (
  data: SettlementType
): CreateItemSuccessActionType => ({
  type: CREATE_ITEM_SUCCESS,
  payload: { data },
});

// CREATE_ITEM_FAILURE
type CreateItemFailureActionType = {
  type: typeof CREATE_ITEM_FAILURE;
};

export const createItemFailure = (): CreateItemFailureActionType => ({
  type: CREATE_ITEM_FAILURE,
});

export type SettlementsActionType =
  | FetchItemsActionType
  | FetchItemsSuccessActionType
  | FetchItemsFailureActionType
  | CreateItemActionType
  | CreateItemSuccessActionType
  | CreateItemFailureActionType;
