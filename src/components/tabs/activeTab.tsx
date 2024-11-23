import React from 'react';
import './activeTab.css';
import DocumentScannerTab from '../tabComponents/documentScanner';
import SignAndStampsTab from '../tabComponents/signAndStamps';
import BatchScanningTab from '../tabComponents/batchScanning';
import AdvancedFiltersTab from '../tabComponents/advancedFilters';
import ExportAndShareTab from '../tabComponents/exportAndShare';

type Props = {
  activeItem: string;
  subHeader: string;
  description: string;
  image: string;
  showText: boolean;
};

const ActiveTab = (props: Props) => {
  return (
    <div key={props.image} className="active-tab-container">
      {props.activeItem === 'Document Scanner' ? (
        <DocumentScannerTab />
      ) : props.activeItem === 'Sign & Stamp' ? (
        <SignAndStampsTab />
      ) : props.activeItem === 'Batch Scanning' ? (
        <BatchScanningTab />
      ) : props.activeItem === 'Advanced Filters' ? (
        <AdvancedFiltersTab />
      ) : props.activeItem === 'Export & Share' ? (
        <ExportAndShareTab />
      ) : null}
      <div
        key={props.activeItem}
        className={`text-container ${props.showText ? 'show' : ''}`}
      >
        <div>
          <div className="header-active-tab">
            {props.activeItem.toUpperCase()}
          </div>
        </div>
        <div>
          <div className="sub-header-active-tab">{props.subHeader}</div>
        </div>
        <div className="text-tab">{props.description}</div>
        <div>
          <button className="btn-active-tab">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ActiveTab;
