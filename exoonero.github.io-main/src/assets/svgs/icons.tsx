import { IIconProps } from "@/shared/interfaces/IIconProps";



const HomeIcon: React.FC<IIconProps> = ({ ...props }) => (
  <svg
    {...props}
    id="ic-home"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="38"
    height="38"
    viewBox="0 0 38 38"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Retângulo_5821"
          data-name="Retângulo 5821"
          width="38"
          height="38"
          fill="#921daf"
        />
      </clipPath>
    </defs>
    <g id="Grupo_13169" data-name="Grupo 13169" clip-path="url(#clip-path)">
      <path
        id="Caminho_43863"
        data-name="Caminho 43863"
        d="M29.094,38.021H8.906A8.916,8.916,0,0,1,0,29.115V16.626A8.959,8.959,0,0,1,3.5,9.544L13.6,1.845a8.928,8.928,0,0,1,10.8,0L34.5,9.544A8.959,8.959,0,0,1,38,16.626V29.115a8.916,8.916,0,0,1-8.906,8.906M19,2.993a5.929,5.929,0,0,0-3.6,1.213L5.305,11.9a5.972,5.972,0,0,0-2.337,4.721V29.115a5.944,5.944,0,0,0,5.938,5.938H29.094a5.944,5.944,0,0,0,5.938-5.938V16.626A5.972,5.972,0,0,0,32.695,11.9L22.6,4.206A5.932,5.932,0,0,0,19,2.993"
        transform=""
        fill="current-color"
      />
    </g>
  </svg>
);

const NewsIcon: React.FC<IIconProps> = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="39"
    height="31.4"
    viewBox="0 0 39 31.4"
  >
    <path
      id="ic-news"
      d="M33.825,34.4H8.175A6.175,6.175,0,0,1,2.01,28.575L2,28.225V8.275A4.275,4.275,0,0,1,5.982,4.01L6.275,4h23.75A4.275,4.275,0,0,1,34.29,7.982l.01.293V9.7h1.425a4.275,4.275,0,0,1,4.265,3.982l.01.293v14.25a6.176,6.176,0,0,1-5.825,6.165l-.35.01h0ZM8.175,31.55h25.65A3.325,3.325,0,0,0,37.139,28.5l.011-.273V13.975a1.425,1.425,0,0,0-1.232-1.412l-.193-.013H34.3V27.275a1.426,1.426,0,0,1-1.232,1.412l-.193.013a1.426,1.426,0,0,1-1.412-1.232l-.013-.193v-19a1.425,1.425,0,0,0-1.232-1.412l-.193-.013H6.275A1.425,1.425,0,0,0,4.863,8.082l-.013.193v19.95A3.325,3.325,0,0,0,7.9,31.539l.273.011h0Zm13.292-7.6h5.712a1.425,1.425,0,0,1,.193,2.837l-.193.013H21.467a1.425,1.425,0,0,1-.193-2.837l.193-.013h0Zm-5.705-6.641a1.425,1.425,0,0,1,1.425,1.425v6.641A1.425,1.425,0,0,1,15.762,26.8H9.121A1.425,1.425,0,0,1,7.7,25.375V18.734a1.425,1.425,0,0,1,1.425-1.425Zm-1.425,2.85H10.546V23.95h3.791Zm7.13-2.85h5.712a1.425,1.425,0,0,1,.193,2.837l-.193.013H21.467a1.425,1.425,0,0,1-.193-2.837l.193-.013h0ZM9.121,10.655H27.179a1.425,1.425,0,0,1,.193,2.837l-.193.013H9.121a1.425,1.425,0,0,1-.193-2.837l.193-.013h0Z"
      transform="translate(-1.5 -3.5)"
      fill="current-color"
      stroke="current-color"
      stroke-width="1"
    />
  </svg>
);

const AboutIcon: React.FC<IIconProps> = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="45.094"
    height="45.075"
    viewBox="0 0 45.094 45.075"
  >
    <g id="ic-about" transform="translate(3.53 3.531)">
      <path
        id="Caminho_43864"
        data-name="Caminho 43864"
        d="M19.015,38.019A19.01,19.01,0,1,1,25.4,1.1a1.464,1.464,0,1,1-.987,2.756A16.072,16.072,0,1,0,34.946,17.013a1.473,1.473,0,1,1,2.925-.351A19.01,19.01,0,0,1,19.015,38.019Z"
        transform="matrix(0.208, 0.978, -0.978, 0.208, 33.654, -3.546)"
        fill="current-color"
      />
      <path
        id="Caminho_43865"
        data-name="Caminho 43865"
        d="M25.671,32.8c-.923,0-1.671-.469-1.671-1.047V21.707c0-.578.748-1.047,1.671-1.047s1.671.469,1.671,1.047V31.755C27.342,32.333,26.594,32.8,25.671,32.8Z"
        transform="translate(-6.448 -5.556)"
        fill="current-color"
      />
      <circle
        id="Elipse_12"
        data-name="Elipse 12"
        cx="1.879"
        cy="1.879"
        r="1.879"
        transform="translate(17.135 9.606)"
        fill="current-color"
      />
    </g>
  </svg>
);

const LogoGreenExonera: React.FC<IIconProps> = ({ ...props }) => (
  <svg
    {...props}
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="108.378"
    height="57.607"
    viewBox="0 0 108.378 57.607"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Retângulo_5967"
          data-name="Retângulo 5967"
          width="108.378"
          height="57.607"
          fill="#4aa381"
        />
      </clipPath>
      <clipPath id="clip-path-2">
        <rect
          id="Retângulo_5973"
          data-name="Retângulo 5973"
          width="26.117"
          height="25.47"
          fill="#4aa381"
        />
      </clipPath>
    </defs>
    <g id="Grupo_13230" data-name="Grupo 13230" clip-path="url(#clip-path)">
      <path
        id="Caminho_44252"
        data-name="Caminho 44252"
        d="M13.879,19.6a6.5,6.5,0,0,0,4.776-1.89l5.969,3.433c-2.438,3.382-6.119,5.124-10.845,5.124C5.273,26.266,0,20.545,0,13.133A12.753,12.753,0,0,1,13.232,0C20.5,0,25.868,5.621,25.868,13.133a14.456,14.456,0,0,1-.3,2.985H7.91c.945,2.587,3.234,3.482,5.97,3.482m4.577-9.054a5.12,5.12,0,0,0-5.273-3.93,5.135,5.135,0,0,0-5.422,3.93Z"
        fill="#4aa381"
      />
      <path
        id="Caminho_44253"
        data-name="Caminho 44253"
        d="M125.669,27.777l-4.626-6.566-4.626,6.566h-8.556l8.9-12.635L108.159,2.9h8.556l4.328,6.168L125.371,2.9h8.556l-8.606,12.237,8.9,12.635Z"
        transform="translate(-81.993 -2.208)"
        fill="#4aa381"
      />
      <path
        id="Caminho_44254"
        data-name="Caminho 44254"
        d="M63.951,123.178a9.356,9.356,0,0,1,7.139,2.761,10.38,10.38,0,0,1,2.612,7.437v15.272H70.418V133.376a7.174,7.174,0,0,0-1.766-5.173,6.606,6.606,0,0,0-5-1.841,7.828,7.828,0,0,0-5.82,2.263q-2.238,2.264-2.238,6.989v13.033H52.311V123.775h3.283v3.88a9.2,9.2,0,0,1,8.357-4.477"
        transform="translate(-39.766 -93.637)"
        fill="#4aa381"
      />
      <path
        id="Caminho_44255"
        data-name="Caminho 44255"
        d="M174.816,123.178a11.282,11.282,0,0,1,8.929,3.905,13.584,13.584,0,0,1,3.407,9.228q0,.548-.1,1.542H165.215a8.915,8.915,0,0,0,3.209,5.994,10.231,10.231,0,0,0,6.691,2.214,9.782,9.782,0,0,0,4.9-1.169,7.884,7.884,0,0,0,3.109-3.059l2.885,1.691a11.808,11.808,0,0,1-4.477,4.179,13.324,13.324,0,0,1-6.467,1.542,12.919,12.919,0,0,1-9.551-3.681,12.668,12.668,0,0,1-3.681-9.352,12.806,12.806,0,0,1,3.631-9.3,12.477,12.477,0,0,1,9.352-3.731m0,3.184a9.313,9.313,0,0,0-9.6,8.308H183.77a9.277,9.277,0,0,0-3.034-6.119,8.784,8.784,0,0,0-5.92-2.189"
        transform="translate(-123.021 -93.637)"
        fill="#4aa381"
      />
      <path
        id="Caminho_44257"
        data-name="Caminho 44257"
        d="M241.924.092H224.3a13.182,13.182,0,0,0,0,26.365h17.623a13.182,13.182,0,0,0,0-26.365m8.49,13.182a8.5,8.5,0,0,1-8.49,8.494H224.3a8.494,8.494,0,0,1,0-16.989h17.623a8.5,8.5,0,0,1,8.49,8.494"
        transform="translate(-160.492 -0.07)"
        fill="#4aa381"
      />
      <path
        id="Caminho_44258"
        data-name="Caminho 44258"
        d="M289.077,128.655q2.287-4.525,7.858-4.526v3.183a8.147,8.147,0,0,0-5.62,1.989q-2.238,1.99-2.238,6.266v13.825H285.8V124.527h3.282Z"
        transform="translate(-217.255 -94.36)"
        fill="#4aa381"
      />
      <path
        id="Caminho_44259"
        data-name="Caminho 44259"
        d="M324.45,35.251a6.3,6.3,0,1,1-6.3-6.3,6.3,6.3,0,0,1,6.3,6.3"
        transform="translate(-237.065 -22.009)"
        fill="#e4d243"
      />
      <g
        id="Grupo_13235"
        data-name="Grupo 13235"
        transform="translate(79.681 29.54)"
      >
        <g
          id="Grupo_13235-2"
          data-name="Grupo 13235"
          clip-path="url(#clip-path-2)"
        >
          <path
            id="Caminho_44270"
            data-name="Caminho 44270"
            d="M13.281,25.47h-.446A12.8,12.8,0,0,1,0,12.735,12.8,12.8,0,0,1,12.836,0h.446A12.8,12.8,0,0,1,26.117,12.735,12.8,12.8,0,0,1,13.281,25.47M12.836,2.885a9.85,9.85,0,1,0,0,19.7h.446a9.85,9.85,0,1,0,0-19.7Z"
            fill="#4aa381"
          />
        </g>
      </g>
    </g>
  </svg>
);

const BackIcon: React.FC<IIconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21.531"
    height="21.186"
    viewBox="0 0 21.531 21.186"
  >
    <g id="ic" transform="translate(-0.978 -1.409)">
      <path
        id="Caminho_44260"
        data-name="Caminho 44260"
        d="M22.476,13.287a8.4,8.4,0,0,0-8.462-7.453H3.146L5.472,2.548A.721.721,0,0,0,4.3,1.71L1.105,6.185a.623.623,0,0,0,0,.716l3.2,4.482a.716.716,0,0,0,1.167-.816l-2.327-3.3H14.013A6.966,6.966,0,0,1,21.044,13.6a6.809,6.809,0,0,1-6.787,7.267H1.714a.716.716,0,1,0,0,1.432H14.243a8.24,8.24,0,0,0,8.233-9.014Z"
        transform="translate(-0.004)"
        fill="#fff"
      />
      <path
        id="Caminho_44261"
        data-name="Caminho 44261"
        d="M4.287,11.8l-3.2-4.482a.644.644,0,0,1,0-.716l3.2-4.5a.716.716,0,0,1,1-.165h0a.716.716,0,0,1,.165,1L2.59,6.958l2.864,4.009a.716.716,0,0,1-.165,1h0a.716.716,0,0,1-1-.165Z"
        transform="translate(0 -0.114)"
        fill="#fff"
      />
      <path
        id="Caminho_44262"
        data-name="Caminho 44262"
        d="M14,8H1.716A.716.716,0,0,0,1,8.715H1a.716.716,0,0,0,.716.716H14a6.966,6.966,0,0,1,7.045,6.336,6.809,6.809,0,0,1-6.8,7.267H1.716A.716.716,0,0,0,1,23.75H1a.716.716,0,0,0,.716.716H14.245a8.24,8.24,0,0,0,8.233-9.028A8.391,8.391,0,0,0,14,8Z"
        transform="translate(-0.006 -1.872)"
        fill="#fff"
      />
    </g>
  </svg>
);

const GithubIcon: React.FC<IIconProps> = ({ ...props }) => (
  <svg
    {...props}
    width="39px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 291.32 291.32"
    xmlSpace="preserve"
  >
    <g>
      <path
        fill="current-color"
        d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66
		s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235
		c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3
		c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0
		c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572
		c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425
		c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263
		c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184
		C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66
		C264.008,196.668,231.69,239.992,186.462,256.625z"
      />
    </g>
  </svg>
);

const IfalIcon: React.FC<IIconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="145.334"
    height="40.208"
    viewBox="0 0 145.334 40.208"
  >
    <g id="logo-ifal" transform="translate(16159.944 10357.396)">
      <g id="g843" transform="translate(-16159.944 -10357.396)">
        <path
          id="path6285"
          d="M398.415,59.454a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8V52.868a.794.794,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-380.012 -51.663)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6287"
          d="M450.213,59.454a.8.8,0,0,1-.8.8H442.83a.8.8,0,0,1-.8-.8V52.868a.794.794,0,0,1,.8-.8h6.586a.8.8,0,0,1,.8.8Z"
          transform="translate(-421.995 -51.663)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6289"
          d="M450.213,163.044a.8.8,0,0,1-.8.8H442.83a.8.8,0,0,1-.8-.8v-6.586a.8.8,0,0,1,.8-.8h6.586a.8.8,0,0,1,.8.8Z"
          transform="translate(-421.995 -135.623)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6291"
          d="M346.62,111.215a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8v-6.587a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-338.032 -93.615)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6293"
          d="M398.415,111.215a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8v-6.587a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-380.012 -93.615)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6295"
          d="M346.62,163.044a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8v-6.586a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-338.032 -135.623)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6297"
          d="M398.415,163.044a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8v-6.586a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-380.012 -135.623)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6299"
          d="M346.62,214.891a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8V208.3a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-338.032 -177.645)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6301"
          d="M398.415,214.891a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8V208.3a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-380.012 -177.645)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6303"
          d="M345.278,54.411a4.5,4.5,0,1,1-4.5-4.5A4.5,4.5,0,0,1,345.278,54.411Z"
          transform="translate(-336.281 -49.913)"
          fill="#fff"
          fill-rule="evenodd"
        />
      </g>
      <g
        id="g843-2"
        data-name="g843"
        transform="translate(-16159.944 -10357.396)"
      >
        <path
          id="path6285-2"
          data-name="path6285"
          d="M398.415,59.454a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8V52.868a.794.794,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-380.012 -51.663)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6287-2"
          data-name="path6287"
          d="M450.213,59.454a.8.8,0,0,1-.8.8H442.83a.8.8,0,0,1-.8-.8V52.868a.794.794,0,0,1,.8-.8h6.586a.8.8,0,0,1,.8.8Z"
          transform="translate(-421.995 -51.663)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6289-2"
          data-name="path6289"
          d="M450.213,163.044a.8.8,0,0,1-.8.8H442.83a.8.8,0,0,1-.8-.8v-6.586a.8.8,0,0,1,.8-.8h6.586a.8.8,0,0,1,.8.8Z"
          transform="translate(-421.995 -135.623)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6291-2"
          data-name="path6291"
          d="M346.62,111.215a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8v-6.587a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-338.032 -93.615)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6293-2"
          data-name="path6293"
          d="M398.415,111.215a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8v-6.587a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-380.012 -93.615)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6295-2"
          data-name="path6295"
          d="M346.62,163.044a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8v-6.586a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-338.032 -135.623)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6297-2"
          data-name="path6297"
          d="M398.415,163.044a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8v-6.586a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-380.012 -135.623)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6299-2"
          data-name="path6299"
          d="M346.62,214.891a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8V208.3a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-338.032 -177.645)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6301-2"
          data-name="path6301"
          d="M398.415,214.891a.8.8,0,0,1-.8.8h-6.587a.8.8,0,0,1-.8-.8V208.3a.8.8,0,0,1,.8-.8h6.587a.8.8,0,0,1,.8.8Z"
          transform="translate(-380.012 -177.645)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="path6303-2"
          data-name="path6303"
          d="M345.278,54.411a4.5,4.5,0,1,1-4.5-4.5A4.5,4.5,0,0,1,345.278,54.411Z"
          transform="translate(-336.281 -49.913)"
          fill="#fff"
          fill-rule="evenodd"
        />
      </g>
      <g id="text6307" transform="translate(-16127 -10337.375)">
        <path
          id="path893"
          d="M254.009,289.594v-8.139h1.726v8.139Z"
          transform="translate(-254.009 -281.326)"
          fill="#fff"
        />
        <path
          id="path895"
          d="M281.318,289.594h-2.193l-3.541-6.158h-.05q.106,1.631.106,2.327v3.83H274.1v-8.139h2.177l3.535,6.1h.039q-.084-1.587-.084-2.244v-3.853h1.553Z"
          transform="translate(-270.311 -281.326)"
          fill="#fff"
        />
        <path
          id="path897"
          d="M325.9,286.83a2.1,2.1,0,0,1-.8,1.737,3.434,3.434,0,0,1-2.2.635,5.184,5.184,0,0,1-2.3-.49v-1.6a9.565,9.565,0,0,0,1.392.518,4.161,4.161,0,0,0,1.047.15,1.471,1.471,0,0,0,.868-.217.74.74,0,0,0,.306-.646.7.7,0,0,0-.134-.423,1.459,1.459,0,0,0-.4-.362,9.749,9.749,0,0,0-1.052-.551,5,5,0,0,1-1.119-.674,2.528,2.528,0,0,1-.6-.752,2.145,2.145,0,0,1-.223-1,2.107,2.107,0,0,1,.729-1.7,3.053,3.053,0,0,1,2.026-.618,4.744,4.744,0,0,1,1.208.15,8.277,8.277,0,0,1,1.208.423l-.557,1.342a8.075,8.075,0,0,0-1.08-.373,3.434,3.434,0,0,0-.835-.106,1.109,1.109,0,0,0-.752.228.81.81,0,0,0-.156,1,1.223,1.223,0,0,0,.334.328,11.422,11.422,0,0,0,1.1.568,4.33,4.33,0,0,1,1.564,1.1A2.123,2.123,0,0,1,325.9,286.83Z"
          transform="translate(-308.046 -280.823)"
          fill="#fff"
        />
        <path
          id="path899"
          d="M356.287,289.594h-1.726v-6.7h-2.21v-1.436H358.5v1.436h-2.21Z"
          transform="translate(-333.818 -281.326)"
          fill="#fff"
        />
        <path
          id="path901"
          d="M391.67,289.594v-8.139H393.4v8.139Z"
          transform="translate(-365.727 -281.326)"
          fill="#fff"
        />
        <path
          id="path903"
          d="M411.47,289.594h-1.726v-6.7h-2.21v-1.436h6.146v1.436h-2.21Z"
          transform="translate(-378.601 -281.326)"
          fill="#fff"
        />
        <path
          id="path905"
          d="M453.238,281.454v5.267a3.02,3.02,0,0,1-.406,1.581,2.609,2.609,0,0,1-1.164,1.041,4.17,4.17,0,0,1-1.8.362,3.461,3.461,0,0,1-2.438-.8,2.863,2.863,0,0,1-.868-2.2v-5.244h1.72v4.983a2.087,2.087,0,0,0,.379,1.381,1.574,1.574,0,0,0,1.253.44,1.535,1.535,0,0,0,1.225-.44,2.1,2.1,0,0,0,.384-1.392v-4.972Z"
          transform="translate(-410.27 -281.326)"
          fill="#fff"
        />
        <path
          id="path907"
          d="M492.294,289.594h-1.726v-6.7h-2.21v-1.436H494.5v1.436h-2.21Z"
          transform="translate(-444.193 -281.326)"
          fill="#fff"
        />
        <path
          id="path909"
          d="M533.506,284.961a4.417,4.417,0,0,1-1,3.107,4.344,4.344,0,0,1-5.745,0,4.434,4.434,0,0,1-1-3.118,4.371,4.371,0,0,1,1-3.1,3.762,3.762,0,0,1,2.884-1.074,3.7,3.7,0,0,1,2.867,1.08A4.42,4.42,0,0,1,533.506,284.961Zm-5.94,0a3.4,3.4,0,0,0,.518,2.054,1.812,1.812,0,0,0,1.548.69q2.065,0,2.065-2.745t-2.054-2.75a1.821,1.821,0,0,0-1.553.7A3.373,3.373,0,0,0,527.566,284.961Z"
          transform="translate(-474.544 -280.775)"
          fill="#fff"
        />
      </g>
      <g id="text6311" transform="translate(-16062.505 -10337.17)">
        <path
          id="path878"
          d="M285.071,341.408h-1.7v-8.139h4.665v1.414h-2.967v2.1h2.761v1.409h-2.761Z"
          transform="translate(-283.373 -333.235)"
          fill="#fff"
        />
        <path
          id="path880"
          d="M321.264,341.408h-4.688v-8.139h4.688v1.414H318.3v1.787h2.756v1.414H318.3v2.1h2.962Z"
          transform="translate(-310.319 -333.235)"
          fill="#fff"
        />
        <path
          id="path882"
          d="M357.243,337.261a4,4,0,0,1-1.147,3.079,4.655,4.655,0,0,1-3.3,1.069h-2.3v-8.139h2.555a4.3,4.3,0,0,1,3.1,1.052A3.871,3.871,0,0,1,357.243,337.261Zm-1.793.045q0-2.622-2.316-2.622h-.919v5.3h.74Q355.45,339.983,355.45,337.305Z"
          transform="translate(-337.841 -333.235)"
          fill="#fff"
        />
        <path
          id="path884"
          d="M399.962,341.408h-4.688v-8.139h4.688v1.414H397v1.787h2.756v1.414H397v2.1h2.962Z"
          transform="translate(-374.186 -333.235)"
          fill="#fff"
        />
        <path
          id="path886"
          d="M430.913,336.882h.557a2.13,2.13,0,0,0,1.208-.273.974.974,0,0,0,.39-.857.889.889,0,0,0-.4-.824,2.4,2.4,0,0,0-1.23-.245h-.523Zm0,1.4v3.123h-1.726v-8.139h2.372a4.045,4.045,0,0,1,2.455.607,2.148,2.148,0,0,1,.8,1.832,2.172,2.172,0,0,1-.4,1.281,2.625,2.625,0,0,1-1.119.874q1.837,2.745,2.394,3.546h-1.915l-1.943-3.123Z"
          transform="translate(-401.708 -333.235)"
          fill="#fff"
        />
        <path
          id="path888"
          d="M469.7,341.264l-.59-1.937h-2.967l-.59,1.937h-1.859l2.873-8.173h2.11l2.884,8.173Zm-1-3.385q-.818-2.633-.924-2.979t-.145-.546q-.184.713-1.052,3.524Z"
          transform="translate(-429.709 -333.091)"
          fill="#fff"
        />
        <path
          id="path890"
          d="M510.839,341.408v-8.139h1.726v6.714h3.3v1.425Z"
          transform="translate(-467.971 -333.235)"
          fill="#fff"
        />
      </g>
      <g id="text6315" transform="translate(-16127 -10325.657)">
        <path
          id="path863"
          d="M335.342,413.027l-.753-1.923h-2.423l-.744,1.923h-.711l2.39-6.071h.591l2.378,6.071Zm-.972-2.556-.7-1.873q-.136-.356-.281-.873a7.832,7.832,0,0,1-.261.873l-.711,1.873Z"
          transform="translate(-330.711 -406.593)"
          fill="#fff"
        />
        <path
          id="path865"
          d="M363.381,411.479h-.686v-6.434h.686Z"
          transform="translate(-356.608 -405.044)"
          fill="#fff"
        />
        <path
          id="path867"
          d="M375.338,419.255l-.137-.645h-.033a1.923,1.923,0,0,1-.678.579,2.071,2.071,0,0,1-.839.149,1.522,1.522,0,0,1-1.059-.347,1.271,1.271,0,0,1-.38-.988q0-1.373,2.2-1.439l.769-.025v-.281a1.134,1.134,0,0,0-.232-.786.933.933,0,0,0-.732-.256,2.991,2.991,0,0,0-1.282.347l-.211-.525a3.281,3.281,0,0,1,1.534-.389,1.719,1.719,0,0,1,1.2.36,1.5,1.5,0,0,1,.393,1.154v3.093Zm-1.551-.484a1.386,1.386,0,0,0,1-.351,1.3,1.3,0,0,0,.368-.984v-.409l-.686.029a2.49,2.49,0,0,0-1.183.256.763.763,0,0,0-.36.7.71.71,0,0,0,.223.566A.944.944,0,0,0,373.788,418.771Z"
          transform="translate(-364.314 -412.821)"
          fill="#fff"
        />
        <path
          id="path869"
          d="M400.063,414.688v.434l-.839.1a1.487,1.487,0,0,1,.3.906,1.34,1.34,0,0,1-.455,1.063,1.835,1.835,0,0,1-1.249.4,2.079,2.079,0,0,1-.38-.033.676.676,0,0,0-.438.583.3.3,0,0,0,.153.277,1.141,1.141,0,0,0,.525.087h.8a1.787,1.787,0,0,1,1.129.31,1.075,1.075,0,0,1,.4.9,1.282,1.282,0,0,1-.6,1.145,3.218,3.218,0,0,1-1.762.4,2.417,2.417,0,0,1-1.373-.331,1.07,1.07,0,0,1-.48-.935,1.05,1.05,0,0,1,.265-.715,1.347,1.347,0,0,1,.744-.409.733.733,0,0,1-.294-.244.654.654,0,0,1-.116-.385.73.73,0,0,1,.132-.434,1.392,1.392,0,0,1,.418-.36,1.236,1.236,0,0,1-.575-.492,1.633,1.633,0,0,1,.227-1.939,1.817,1.817,0,0,1,1.265-.405,2.3,2.3,0,0,1,.641.083Zm-3.614,5.293a.615.615,0,0,0,.31.558,1.712,1.712,0,0,0,.889.19,2.453,2.453,0,0,0,1.278-.261.786.786,0,0,0,.418-.7.56.56,0,0,0-.227-.513,1.789,1.789,0,0,0-.856-.141h-.823a1.084,1.084,0,0,0-.728.223A.8.8,0,0,0,396.449,419.981Zm.372-3.842a.923.923,0,0,0,.269.72,1.073,1.073,0,0,0,.748.244.876.876,0,0,0,1-.976.9.9,0,0,0-1.017-1.021,1.007,1.007,0,0,0-.744.261A1.049,1.049,0,0,0,396.821,416.139Z"
          transform="translate(-383.402 -412.785)"
          fill="#fff"
        />
        <path
          id="path871"
          d="M426.026,416.95a2.508,2.508,0,0,1-.558,1.733,1.969,1.969,0,0,1-1.542.62,2.043,2.043,0,0,1-1.079-.285,1.883,1.883,0,0,1-.728-.819,2.853,2.853,0,0,1-.256-1.249,2.488,2.488,0,0,1,.554-1.724,1.956,1.956,0,0,1,1.538-.62,1.911,1.911,0,0,1,1.509.633A2.483,2.483,0,0,1,426.026,416.95Zm-3.453,0a2.151,2.151,0,0,0,.347,1.323,1.378,1.378,0,0,0,2.043,0,2.14,2.14,0,0,0,.351-1.327,2.088,2.088,0,0,0-.351-1.311,1.4,1.4,0,0,0-2.047-.008A2.129,2.129,0,0,0,422.573,416.95Z"
          transform="translate(-404.514 -412.785)"
          fill="#fff"
        />
        <path
          id="path873"
          d="M451.388,419.255l-.136-.645h-.033a1.923,1.923,0,0,1-.678.579,2.071,2.071,0,0,1-.839.149,1.522,1.522,0,0,1-1.059-.347,1.271,1.271,0,0,1-.38-.988q0-1.373,2.2-1.439l.769-.025v-.281a1.134,1.134,0,0,0-.232-.786.933.933,0,0,0-.732-.256,2.991,2.991,0,0,0-1.282.347l-.211-.525a3.281,3.281,0,0,1,1.534-.389,1.718,1.718,0,0,1,1.2.36,1.5,1.5,0,0,1,.393,1.154v3.093Zm-1.551-.484a1.386,1.386,0,0,0,1-.351,1.3,1.3,0,0,0,.368-.984v-.409l-.686.029a2.49,2.49,0,0,0-1.183.256.763.763,0,0,0-.36.7.71.71,0,0,0,.223.566A.944.944,0,0,0,449.837,418.771Z"
          transform="translate(-425.89 -412.821)"
          fill="#fff"
        />
        <path
          id="path875"
          d="M476.506,417.983a1.135,1.135,0,0,1-.471.976,2.216,2.216,0,0,1-1.323.343,2.878,2.878,0,0,1-1.406-.285v-.637a3.412,3.412,0,0,0,.7.261,2.953,2.953,0,0,0,.724.1,1.653,1.653,0,0,0,.827-.17.572.572,0,0,0,.289-.525.56.56,0,0,0-.232-.451,3.5,3.5,0,0,0-.893-.447,5.059,5.059,0,0,1-.9-.409,1.275,1.275,0,0,1-.4-.4,1.054,1.054,0,0,1-.128-.533,1.012,1.012,0,0,1,.451-.873,2.09,2.09,0,0,1,1.236-.323,3.617,3.617,0,0,1,1.431.3l-.244.558a3.284,3.284,0,0,0-1.236-.281,1.423,1.423,0,0,0-.736.153.473.473,0,0,0-.248.422.522.522,0,0,0,.091.31.943.943,0,0,0,.3.244,6.692,6.692,0,0,0,.794.335,2.941,2.941,0,0,1,1.088.591A1.039,1.039,0,0,1,476.506,417.983Z"
          transform="translate(-446.158 -412.785)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);

export {
  HomeIcon,
  NewsIcon,
  AboutIcon,
  LogoGreenExonera,
  BackIcon,
  GithubIcon,
  IfalIcon,
};