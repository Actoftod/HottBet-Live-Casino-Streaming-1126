import React from 'react';
import { HelpHub } from '@questlabs/react-sdk';
import questConfig from '../config/questConfig';

const AppHelp = () => {
  return (
    <div className="fixed inset-0 z-[9999]">
      <HelpHub
        uniqueUserId={questConfig.USER_ID}
        questId={questConfig.QUEST_HELP_QUESTID}
        accent={questConfig.PRIMARY_COLOR}
        botLogo={{
          logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1741000949338-Vector%20%282%29.png'
        }}
      />
    </div>
  );
};

export default AppHelp;