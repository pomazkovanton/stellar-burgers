import React from 'react';
import { Link } from 'react-scroll';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { TTab } from '../../../utils/types/main';

import styles from './tabs.module.css';

interface ITabsProps {
  current: string;
  tabs: TTab[];
  handleClick: (tab: string) => void;
}

const Tabs: React.FC<ITabsProps> = ({ current, handleClick, tabs }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => {
        return (
          <Link
            key={tab.value}
            containerId='containerElement'
            to={tab.value}
            spy={true}
            smooth={true}
            onSetActive={handleClick}
          >
            <Tab value={tab.value} active={current === tab.value}>
              {tab.name}
            </Tab>
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
