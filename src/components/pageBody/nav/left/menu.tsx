import styles from 'styles/app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { useDisclosure } from '@chakra-ui/react';
import ProposalModal from 'components/pageBody/proposal/proposalCreationModal/ProposalModal';
import ProposalModalButton from 'components/pageBody/proposal/proposalCreationModal/ProposalModalButton';

function MenuLeft() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Personal</div>
        <div className={styles['side-menu']}>
          <a href="#">
            <svg viewBox="0 0 512 512">
              <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path
                  d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                  data-original="#bfc9d1"
                />
              </g>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M192 192h128v128H192zm0 0"
                fill="currentColor"
                data-original="#82b1ff"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                fill="currentColor"
                data-original="#bfc9d1"
              />
            </svg>
            My Dashboard
          </a>
          <a href="#">
            <svg viewBox="0 0 488.932 488.932" fill="currentColor">
              <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
            </svg>
            Updates
            <span
              className={[styles['notification-number'], styles.updates].join(
                ' '
              )}
            >
              3
            </span>
          </a>
        </div>
      </div>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Vaults</div>
        <div className={styles['side-menu']}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={styles['bi bi-bank']}
              viewBox="0 0 16 16"
            >
              {' '}
              <path
                d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"
                fill="currentColor"
              ></path>{' '}
            </svg>
            All
          </a>
        </div>
      </div>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>Governance</div>
        <div className={styles['side-menu']}>
          <ProposalModalButton onOpen={onOpen} />
          <ProposalModal isOpen={isOpen} onClose={onClose} />
          <a href="#">
            <FontAwesomeIcon fill="currentColor" icon={solid('coins')} />
            Deposit fYFD
          </a>
          <a href="#">
            <svg viewBox="0 0 512 512" fill="currentColor">
              <circle
                cx="295.099"
                cy="327.254"
                r="110.96"
                transform="rotate(-45 295.062 327.332)"
              />
              <path d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
            </svg>
            DAO Proposals
          </a>
          <a href="#">
            <svg viewBox="0 0 512 512" fill="currentColor">
              <circle
                cx="295.099"
                cy="327.254"
                r="110.96"
                transform="rotate(-45 295.062 327.332)"
              />
              <path d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
            </svg>
            Vault Proposals
          </a>
        </div>
      </div>
      <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>About Y-Foundry DAO</div>
        <div className={styles['side-menu']}>
          <a href="#">
            <svg viewBox="0 0 512 512" fill="currentColor">
              <path d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM181 241c41.353 0 75 33.647 75 75s-33.647 75-75 75-75-33.647-75-75c0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45zm180 120h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-24.814 0-45-20.186-45-45V211h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-8.291 6.709-15 15-15s15 6.709 15 15v45h45c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.276 6.724 15 15 15z" />
            </svg>
            Getting Started
          </a>
          <a href="#">
            <svg viewBox="0 0 511.441 511.441" fill="currentColor">
              <path d="M255.721 347.484L90.22 266.751v106.57l165.51 73.503 165.509-73.503V266.742z" />
              <path d="M511.441 189.361L255.721 64.617 0 189.361l255.721 124.744 195.522-95.378v111.032h30V204.092z" />
            </svg>
            Documentation
          </a>
          <a href="#">
            <svg viewBox="0 0 512 512" fill="currentColor">
              <path d="M352 0H64C28.704 0 0 28.704 0 64v320a16.02 16.02 0 009.216 14.496A16.232 16.232 0 0016 400c3.68 0 7.328-1.248 10.24-3.712L117.792 320H352c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" />
              <path d="M464 128h-16v128c0 52.928-43.072 96-96 96H129.376L128 353.152V400c0 26.464 21.536 48 48 48h234.368l75.616 60.512A16.158 16.158 0 00496 512c2.336 0 4.704-.544 6.944-1.6A15.968 15.968 0 00512 496V176c0-26.464-21.536-48-48-48z" />
            </svg>
            Discord
          </a>
          <a href="#">
            <svg className={styles['svg-icon']} viewBox="0 0 20 20">
              <path
                fill="none"
                d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
              ></path>
            </svg>
            Twitter
          </a>
          <a href="#">
            <svg viewBox="0 0 512 512" fill="currentColor">
              <path d="M181 181h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M181 271h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M346 241c-19.555 0-36.238 12.54-42.438 30h84.875c-6.199-17.46-22.882-30-42.437-30zm0 0" />
              <path d="M436 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h361c41.352 0 76-33.648 76-75V75c0-41.352-34.648-75-76-75zM286 151h120v30H286zm-45 150c0 33.09-26.91 60-60 60H91V151h90c33.09 0 60 26.91 60 60 0 18.008-8.133 33.996-20.73 45 12.597 11.004 20.73 26.992 20.73 45zm180 0H303.562c6.196 17.46 22.883 30 42.438 30 16.012 0 30.953-8.629 38.992-22.516l25.957 15.032C397.58 346.629 372.687 361 346 361c-41.352 0-75-33.648-75-75s33.648-75 75-75 75 33.648 75 75zm0 0" />
            </svg>
            Source Code
          </a>
        </div>
      </div>
    </>
  );
}

export default MenuLeft;
