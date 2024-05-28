//@flow
import * as React from "react";
import { useCampaign } from "@limio/sdk";

type Props = {
}

function CrossSell({ }: Props): React.Node {

  const campaign = useCampaign()
  console.log(campaign)

  return <div></div>;
}

export default CrossSell