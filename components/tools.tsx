import Image from "next/image";
import Link from "next/link";
import NodeLogo from "/public/images/nodejs.svg";

export default function Tools() {
  return (
    <div>
      <h3>Tools</h3>
      <ul className="flex flex-wrap items-center gap-4 text-sm md:text-base">
        <li>
          <Link className="flex gap-1" href="https://www.lazyvim.org/">
            <Image
              src="https://imgs.search.brave.com/yadCgH14O9gsfIn98krDl5Zl-HwYuZ6uLvqhgcfwJ_M/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjE1Yzg2MmVi/ZmFiMTIzNzJiMmY5/ZGMyNjg5ZDQwOTc3/YjkxMzI2Nzk5MDYy/ZmM5ZmVlMmFmYjA0/YjRhM2Q5Mi9uZW92/aW0uaW8v"
              alt="Potrait"
              width={1200}
              height={0}
              className="roundedsm w-6 mx-auto"
            />
            Neovim
          </Link>
        </li>
        <li>
          <Link className="flex gap-1" href="https://github.com">
            <svg viewBox="0 0 16 16" className="w-5 fill-current">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>{" "}
            Github
          </Link>
        </li>
        <li>
          <Link className="flex gap-1" href="https://bitbucket.org">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fill="#2684FF"
                fillRule="evenodd"
                d="M1.403 2.15A.43.43 0 011.73 2l12.54.002a.43.43 0 01.424.496l-1.81 11.135a.43.43 0 01-.425.36H3.693a.585.585 0 01-.568-.478l-1.82-11.02a.425.425 0 01.098-.345zm5.203 7.814H9.41l.677-3.93H5.859l.747 3.93z"
                clipRule="evenodd"
              />
              <path
                fill="url(#bitbucket-color-16__paint0_linear_707_135)"
                d="M14.122 6.033H10.1l-.67 3.931H6.604L3.317 13.86c.105.09.238.139.376.14h8.766a.43.43 0 00.425-.36l1.238-7.607z"
              />
              <defs>
                <linearGradient
                  id="bitbucket-color-16__paint0_linear_707_135"
                  x1="11.544"
                  x2="6.918"
                  y1="4.676"
                  y2="11.282"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".18" stopColor="#0052CC" />
                  <stop offset="1" stopColor="#2684FF" />
                </linearGradient>
              </defs>
            </svg>{" "}
            Bitbucket
          </Link>
        </li>
        <li>
          <Link href="https://nodejs.org/" className="flex gap-1 items-center">
            <Image
              alt=""
              src={NodeLogo}
              width={1200}
              height={0}
              className="w-[36px] mr-1"
            />
            Nodejs
          </Link>
        </li>
        <li>
          <Link href="https://yarnpkg.com/" className="flex gap-1 items-center">
            <svg
              viewBox="0 0 32 32"
              className="w-6 fill-sky-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M28.208,24.409a10.493,10.493,0,0,0-3.959,1.822,23.743,23.743,0,0,1-5.835,2.642,1.632,1.632,0,0,1-.983.55A62.228,62.228,0,0,1,10.984,30c-1.163.009-1.876-.3-2.074-.776a1.573,1.573,0,0,1,.866-2.074,3.759,3.759,0,0,1-.514-.379c-.171-.171-.352-.514-.406-.388-.225.55-.343,1.894-.947,2.5-.83.839-2.4.559-3.328.072-1.019-.541.072-1.813.072-1.813a.73.73,0,0,1-.992-.343,4.847,4.847,0,0,1-.667-2.949,5.374,5.374,0,0,1,1.749-2.895,9.334,9.334,0,0,1,.658-4.4,10.445,10.445,0,0,1,3.165-3.661S6.628,10.747,7.35,8.817c.469-1.262.658-1.253.812-1.308a3.633,3.633,0,0,0,1.452-.857,5.265,5.265,0,0,1,4.41-1.7S15.2,1.4,16.277,2.09a18.349,18.349,0,0,1,1.533,2.886s1.281-.748,1.425-.469a11.334,11.334,0,0,1,.523,6.132,14.01,14.01,0,0,1-2.6,5.411c-.135.225,1.551.938,2.615,3.887.983,2.7.108,4.96.262,5.212.027.045.036.063.036.063s1.127.09,3.391-1.308A8.5,8.5,0,0,1,27.739,22.3a1.081,1.081,0,0,1,.469,2.11Z" />
            </svg>
            Yarn
          </Link>
        </li>
      </ul>
    </div>
  );
}
