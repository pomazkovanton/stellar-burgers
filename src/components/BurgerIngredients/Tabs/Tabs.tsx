import React from 'react';
import { Link } from 'react-scroll';

import styles from './tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

type Tab = {
  value: string;
  name: string;
};

interface ITabsProps {
  current: string;
  handleClick: (tab: string) => void;
  tabs: Tab[];
}

const Tabs: React.FC<ITabsProps> = ({ current, handleClick, tabs }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => {
        return (
          <Tab key={tab.value} value={tab.value} active={current === tab.value}>
            <Link
              className={styles.link}
              containerId='containerElement'
              to={tab.value}
              spy={true}
              smooth={true}
              onSetActive={handleClick}
            >
              {tab.name}
            </Link>
          </Tab>
        );
      })}
    </div>
  );
};

export default Tabs;
