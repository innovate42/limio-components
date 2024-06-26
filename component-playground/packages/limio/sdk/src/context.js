// @flow
import * as React from "react";
import type { OrderItem, Subscription } from "@limio/types"
import type {
  AddToBasket,
  CampaignInfo,
  LimioComponentContext,
  LimioContext as LimioContextType,
  CatalogItemOffer,
  User,
} from "../../../../types";
import { groupedOffers } from "../../data/offers";
import { basketItems } from "../../data/basket";
import { user } from "../../data/user";
import { order, paidSchedule } from "../../data/useCheckout/index"
import { useSub } from "../../data/userSubscription/userSub";
import { addOns } from "../../data/offers/add-ons"

const LimioContext = React.createContext<LimioContextType>({});
export const ComponentContext: LimioComponentContext = React.createContext<LimioComponentContext>({});

// Selection of LimioContextShop properties
type UseCampaign = {
  campaign: CampaignInfo,
  offers: CatalogItemOffer[],
};

export function useCampaign(): UseCampaign {
  const context: LimioContextType = React.useContext(LimioContext);
  if (context === undefined) {
    throw new Error("useBasket must be used within a LimioProvider");
  }
  const { campaign, offers, addOns } = dummyContext.shop;
  return { campaign, offers, addOns };
}

// Selection of LimioContextShop properties
type UseBasket = {
  addToBasket: AddToBasket,
  basketItems: OrderItem[],
  validateBasket
};

function validateBasket(){
  console.log("Baket Validates")
}

export function useBasket(): UseBasket {
  const context: LimioContextType = React.useContext(LimioContext);
  if (context === undefined) {
    throw new Error("useBasket must be used within a LimioProvider");
  }
  const { basketItems, addToBasket } = dummyContext.shop;
  return { basketItems, addToBasket, validateBasket };
}



// Selection of LimioContextShop properties
type UseLimioContext = {
  isInPageBuilder?: boolean
};

export function useLimioContext(): UseLimioContext {
  const context: LimioContextType = React.useContext(LimioContext);
  if (context === undefined) {
    throw new Error("useLimioContext must be used within a LimioProvider");
  }
  const { pageBuilder__limio: isInPageBuilder } = dummyContext;
  return { isInPageBuilder };
}

// Selection of LimioContextShop properties
type UseSubscriptions = {
  subscriptions?: Subscription[]
}

export function useSubscriptions(): UseSubscriptions {
  const context: LimioContextType = React.useContext(LimioContext);
  if (context === undefined) {
    throw new Error("useSubscriptions must be used within a LimioProvider");
  }

  const { subscriptions } = dummyContext
  return { subscriptions };
}

export function useUser(): User {
  const context: LimioContextType = React.useContext(LimioContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a LimioProvider");
  }
  return user;
}

type LimioProviderProps = {
  children: React.Node,
  value: LimioContextType,
};

export function LimioProvider({
                                children, // $FlowIssue[prop-missing]
                                value = dummyContext,
                              }: LimioProviderProps): React.Node {
  return (
      <LimioContext.Provider value={value}>{children}</LimioContext.Provider>
  );
}

export function useComponentProps<T>(defaultProps: $Shape<T>): T {
  const context = React.useContext(ComponentContext);
  console.log("context", context);
  console.log("defaultProps", defaultProps);
  if (context === undefined) {
    throw new Error("useComponentProps must be used within a ComponentContext");
  }

  // limit changes - both context and defaultProps should be static objects
  const componentProps = React.useMemo(() => {
    return { ...defaultProps, ...context };
  }, [context, defaultProps]);

  return componentProps;
}


export function useCheckout() {
  const useCheckoutSelector = () => dummyState

  return { useCheckoutSelector }
}


const dummyContext = {
  pageBuilder__limio: false,
  shop: {
    campaign: {
      name: "Dummy Campaign",
      path: "/offers/Dummy Campaign",
      attributes: {
        push_to_checkout__limio: true,
      },
    },
    offers: groupedOffers,
    addOns: addOns,
    tag: "/tags/limio",
    location: { pathname: "/default" },
    basketItems: basketItems,
    addToBasket: (offer) => {
      console.log("Item added to basket:", offer);
    },
  },
  user: user,
  subscriptions: useSub,
};

const dummyState = {
  order: order,
  paidSchedule: paidSchedule
}
