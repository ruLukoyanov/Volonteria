import React from 'react';

import styles from './Rating.module.scss';

export default function User({ user = {}, hours = '', id = 0 }) {
  const day = Math.floor(hours / 24);
  const week = Math.floor(day / 7);
  let time = `${day} д. ${hours % 24} ч.`;

  if (!day) {
    time = `${hours % 24} ч.`;
  }

  if (week) {
    time = `${week} нед. ${day} д. ${hours % 24} ч.`;
  }
  return (
    <li>
      <div className={styles.num}>{id}</div>
      <div className={styles.userData}>
        <div>
          <img className={styles.image} alt="avatar" src={user.avatar} />
        </div>
        <div className={styles.name}>{user.user_login}</div>
        <div className={styles.points}>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_494_494)">
              <path
                d="M4.04294 14.4988L4.04305 14.4992C4.0426 14.4995 4.0422 14.4996 4.04184 14.4998C4.04049 14.4991 4.03857 14.498 4.03621 14.4961C4.03005 14.4912 4.02446 14.484 4.02112 14.4755C4.01839 14.4686 4.0156 14.4572 4.01894 14.4382L4.01899 14.4379L4.84899 9.70792L4.89528 9.44417L4.70139 9.25947L1.17873 5.9038C1.1787 5.90377 1.17867 5.90374 1.17864 5.90371C1.16919 5.89466 1.16553 5.88681 1.16356 5.87849C1.16109 5.86803 1.161 5.85373 1.16546 5.83875C1.16994 5.82372 1.17668 5.81561 1.17951 5.81299C1.17961 5.8129 1.17969 5.81281 1.17978 5.81271C1.18044 5.81203 1.18111 5.81134 1.18613 5.81063L1.18686 5.81053L6.08486 5.11453L6.34327 5.07781L6.46088 4.8448L8.64481 0.517936C8.64885 0.509945 8.65225 0.505812 8.65392 0.50401C8.65563 0.502155 8.65675 0.501433 8.65718 0.501168C8.65809 0.500623 8.65964 0.5 8.66202 0.5C8.66439 0.5 8.66595 0.500623 8.66685 0.501168C8.66729 0.501433 8.6684 0.502155 8.67012 0.50401C8.67178 0.505812 8.67519 0.509945 8.67922 0.517936L10.8632 4.8448L10.9808 5.07781L11.2392 5.11453L16.1372 5.81053L16.1379 5.81063C16.1429 5.81134 16.1436 5.81203 16.1442 5.81269C16.1443 5.81278 16.1444 5.81287 16.1445 5.81295C16.1473 5.81553 16.1539 5.82356 16.1584 5.83846C16.1628 5.8533 16.1627 5.86747 16.1602 5.87784C16.1582 5.88608 16.1546 5.89403 16.1449 5.90328L16.1446 5.90352L12.6226 9.25952L12.4288 9.44421L12.475 9.70792L13.305 14.4379L13.3051 14.4382C13.3084 14.4572 13.3056 14.4686 13.3029 14.4755C13.2996 14.484 13.294 14.4912 13.2878 14.4961C13.2855 14.498 13.2835 14.4991 13.2822 14.4998C13.2815 14.4995 13.2807 14.4991 13.2797 14.4986L8.88901 12.2428L8.66047 12.1253L8.43194 12.2428L4.04294 14.4988Z"
                stroke="#AA139B"
              />
            </g>
            <defs>
              <clipPath id="clip0_494_494">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.660645)"
                />
              </clipPath>
            </defs>
          </svg>
          15555 баллов
        </div>
        <div className={styles.time}>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66064 13C9.98673 13 11.2585 12.4732 12.1962 11.5355C13.1339 10.5979 13.6606 9.32608 13.6606 8C13.6606 6.67392 13.1339 5.40215 12.1962 4.46447C11.2585 3.52678 9.98673 3 8.66064 3C7.33456 3 6.06279 3.52678 5.12511 4.46447C4.18743 5.40215 3.66064 6.67392 3.66064 8C3.66064 9.32608 4.18743 10.5979 5.12511 11.5355C6.06279 12.4732 7.33456 13 8.66064 13V13ZM8.66064 14C7.87271 14 7.0925 13.8448 6.36454 13.5433C5.63659 13.2417 4.97516 12.7998 4.418 12.2426C3.86085 11.6855 3.4189 11.0241 3.11737 10.2961C2.81584 9.56815 2.66064 8.78793 2.66064 8C2.66064 7.21207 2.81584 6.43185 3.11737 5.7039C3.4189 4.97595 3.86085 4.31451 4.418 3.75736C4.97516 3.20021 5.63659 2.75825 6.36454 2.45672C7.0925 2.15519 7.87271 2 8.66064 2C10.2519 2 11.7781 2.63214 12.9033 3.75736C14.0285 4.88258 14.6606 6.4087 14.6606 8C14.6606 9.5913 14.0285 11.1174 12.9033 12.2426C11.7781 13.3679 10.2519 14 8.66064 14Z"
              fill="#AA139B"
            />
            <path
              d="M5.22766 12.884L6.09366 13.384L5.34366 14.683C5.31107 14.7403 5.26746 14.7906 5.21535 14.831C5.16323 14.8714 5.10364 14.9011 5.04001 14.9184C4.97637 14.9357 4.90994 14.9402 4.84455 14.9317C4.77916 14.9232 4.7161 14.9018 4.659 14.8689C4.60189 14.8359 4.55187 14.792 4.51182 14.7396C4.47176 14.6872 4.44246 14.6274 4.42561 14.5637C4.40876 14.4999 4.40468 14.4335 4.41361 14.3681C4.42254 14.3028 4.44431 14.2399 4.47766 14.183L5.22766 12.884ZM12.0937 12.884L11.2277 13.384L11.9777 14.683C12.0103 14.7403 12.0539 14.7906 12.106 14.831C12.1581 14.8714 12.2177 14.9011 12.2813 14.9184C12.345 14.9357 12.4114 14.9402 12.4768 14.9317C12.5422 14.9232 12.6052 14.9018 12.6623 14.8689C12.7194 14.8359 12.7694 14.792 12.8095 14.7396C12.8496 14.6872 12.8789 14.6274 12.8957 14.5637C12.9126 14.4999 12.9166 14.4335 12.9077 14.3681C12.8988 14.3028 12.877 14.2399 12.8437 14.183L12.0937 12.884ZM8.66066 8H11.1607C11.2933 8 11.4204 8.05268 11.5142 8.14645C11.608 8.24022 11.6607 8.36739 11.6607 8.5C11.6607 8.63261 11.608 8.75979 11.5142 8.85355C11.4204 8.94732 11.2933 9 11.1607 9H8.16066C8.02805 9 7.90087 8.94732 7.80711 8.85355C7.71334 8.75979 7.66066 8.63261 7.66066 8.5V5.00001C7.66066 4.8674 7.71334 4.74022 7.80711 4.64646C7.90087 4.55269 8.02805 4.50001 8.16066 4.50001C8.29327 4.50001 8.42044 4.55269 8.51421 4.64646C8.60798 4.74022 8.66066 4.8674 8.66066 5.00001V8ZM2.07466 4.87901C1.75556 4.39816 1.61265 3.82173 1.67017 3.24751C1.72768 2.6733 1.98208 2.13666 2.39021 1.72865C2.79833 1.32065 3.33504 1.0664 3.90928 1.00905C4.48351 0.951703 5.0599 1.09478 5.54066 1.41402L4.80866 2.14601C4.52875 2.01233 4.21428 1.96872 3.90856 2.02117C3.60283 2.07362 3.32089 2.21957 3.10155 2.43891C2.88221 2.65824 2.73627 2.94019 2.68381 3.24591C2.63136 3.55164 2.67498 3.8661 2.80866 4.14601L2.07566 4.87901H2.07466ZM15.1257 4.87901C15.4443 4.39824 15.5869 3.82207 15.5293 3.24817C15.4717 2.67427 15.2174 2.13794 14.8096 1.73009C14.4017 1.32225 13.8654 1.06797 13.2915 1.01036C12.7176 0.952756 12.1414 1.09536 11.6607 1.41402L12.3927 2.14601C12.6726 2.01233 12.987 1.96872 13.2928 2.02117C13.5985 2.07362 13.8804 2.21957 14.0998 2.43891C14.3191 2.65824 14.4651 2.94019 14.5175 3.24591C14.57 3.55164 14.5263 3.8661 14.3927 4.14601L15.1257 4.87901Z"
              fill="#AA139B"
            />
          </svg>
          {time}
        </div>
      </div>
    </li>
  );
}
