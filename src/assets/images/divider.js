import * as React from "react"

function Divider(props) {
  return (
    <svg
      height={35}
      viewBox="0 0 961 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "5rem 0",
        maxWidth: 961,
      }}
      {...props}
    >
      <path
        d="M.343 17.797c-.086-.772 0-1.115-.086-1.115 0-.086-.085.172-.171.343-.086.172 0 .344-.086.172 0-.086 0-.172.086-.429 0-.257.086-.6.257-1.03.172.43 0 1.03 0 2.06zM949.125 8.532c-5.577 1.887-12.268 3.346-19.046 4.633-6.863 1.2-13.813 2.145-20.247 3.088-1.459.172.343-.6-3.003-.171-6.177.858-14.241 1.115-22.563.171-4.204-.429-8.408-1.287-12.44-2.316-4.033-1.03-7.893-2.317-11.497-3.69l.944.087c-2.745-.944-6.263-1.545-9.094-2.574 0-.086.944.171.343-.172-.858.086-5.319-1.544-6.692-1.63-1.115-.429-.943-.686-2.402-1.201l-1.801-.086c-2.488-.171-5.32-.858-8.494-1.287-1.544-.257-3.174-.514-4.89-.514-1.63-.086-3.346-.172-5.062 0 .343-.086.944-.172.429-.258-5.405.258-11.324 1.287-17.33 2.746-6.005 1.458-12.011 3.431-17.587 5.49.428-.257.772-.686 0-.6-.429.6-3.861 1.887-6.864 3.088-1.458.086-5.062 2.23-8.665 3.26l.257-.171c-2.488 1.287-3.946 1.2-5.919 2.316L765.7 19c-.944.943-3.946.943-6.005 1.887l.085.086c-2.059.772-3.26.686-5.147 1.287h-.172c-2.316.6-4.118.944-5.319 1.2-1.201.258-1.887.344-1.802.601-.858-.085.258-.257 1.287-.514 1.03-.258 1.888-.515.515-.515-3.775.772-7.635 1.373-11.582 1.716-1.973.171-3.946.257-5.92.343h-2.917c-.943 0-1.973 0-2.917-.086-3.946-.086-7.892-.515-11.753-.944a250.585 250.585 0 01-11.582-1.801c-1.716-.515-2.831-.772-3.174-1.03-1.545-.171-5.749-1.115-7.207-1.2.515.085-.944-.43-1.716-.601-2.745-.773-3.088-.258-6.091-1.116 1.201.172 1.63.086 1.287-.085-2.66-.258-6.092-1.202-9.18-1.802.515.086 1.201.171 1.115 0-3.432-.43-6.091-1.545-9.008-2.06h1.115c-4.633-1.458-1.544.172-5.491-1.029 1.03.172.687 0 .858-.085-3.86-.515-10.037-2.06-13.812-2.746.257 0 .171-.086.171-.086-4.118-.858-8.493-1.801-13.126-2.402-1.63-.343.686-.515-3.775-1.115.086.515-7.55-.772-5.062.171-3.774-.514-9.78-1.115-12.354-1.03 1.716-.085-1.887-.685 1.373-.6-.772-.085-1.63-.257-2.402-.429.343-.257 2.488.172 1.716-.171-1.63-.086-6.263.086-7.722.171-1.458.258-2.917.515-4.547.773-.429.085-.858.085-1.287.171-.429.086-.858.172-1.372.257-.944.172-1.974.344-3.175.43 2.231-.43-1.372-.43.172-.687l-3.26.858c-1.116.343-2.145.686-3.26.944-1.545.257-.429-.343-2.66.171.172.086-.858.344-1.544.6-.601 0-6.435 1.374-7.207 1.03-.686-.085 2.488-.6.772-.429-2.917.515-3.002.773-5.834 1.459l-.085-.086c-1.888.343-5.491 1.459-3.432 1.287 1.287-.257-.601-.172 1.373-.515-1.287.6-4.547 1.459-7.379 2.145.944-.343.773-.429 1.202-.686-3.775 1.287-7.722 2.488-12.011 3.775 0 .257 1.458-.858 2.144-.858-5.576 1.115-11.153 3.431-15.871 4.118.772-.258.515.257.429.171-2.66.687-2.66.258-4.29.773-.257-.172-2.145.6-3.946 1.115-.858.343-.515 0 1.029-.343-1.201.429-4.289 1.2-7.807 2.059-1.716.429-3.689.772-5.491 1.115-1.801.343-3.517.6-4.976.772.172.086-3.517.944-4.89 1.115l.515-.343c-.601 0-1.802.172-2.746.258-1.029.085-1.887.171-2.059 0-.686.171-.343.171.515.085.429-.085.944-.085 1.63-.171.601-.086 1.287-.172 1.974-.343 2.659-.43 5.147-.858 3.26-.515-1.03-.086-5.405 1.2-4.547.686-2.746.343-5.32.858-7.979.772.772 0 2.231-.6 0-.429-3.861.258-1.115.172-4.29.344l-1.973.171c-.172.343-3.517 0-2.059.343-.515-.171-5.748-.171-5.233-.6l.6-.343c-1.716-.086-2.745.257-4.118.343-.257-.086-.686-.172-.6-.258-.344.515-4.033-.514-6.092-.343-1.716-.429-3.946-.772-5.919-1.2-1.974-.43-3.689-.859-4.462-1.202-2.659-.429-5.147-.772-8.064-1.716.6.086 1.458.343 1.63.258-1.802-.687-2.316-.687-4.032-1.03.429 0-3.604-1.373-5.663-2.145-2.659-.515-1.801 0-2.144.172-2.231-1.287-7.379-1.716-10.124-3.003.944.172 3.861.772 1.716 0-2.231-1.287-4.89-.858-8.579-2.145l.772.687c-1.63-.687-5.663-1.03-5.148-1.459-1.287-.086-4.461-1.115-4.118-.515-.772-.171-1.63-.429-2.488-.6-.858-.172-1.716-.258-2.659-.43-.858-.17-1.802-.257-2.746-.428-.944-.086-1.801-.172-2.745-.258l-2.574-.257c-.858-.086-1.63-.086-2.402-.171-1.459-.086-2.831-.344-3.775-.515-.944.086-3.174.086-2.745.343 1.544.257 2.144-.257 2.659-.086-.858.086-1.029.172-1.115.257-1.973 0-3.518 0-1.716-.514-1.115 0-1.973 0-2.66.086-.686.171-1.286.343-1.973.514-.6.172-1.287.343-2.145.515-.429.086-.858.172-1.458.257-.515.086-1.115.258-1.802.344.172-.258-.257-.258-1.801.085-1.03.258-1.974.687-2.917 1.03-3.518.858-2.145.086-2.317-.258-1.887.601-4.118 1.373-4.89 1.888l-2.402.429c1.716-.257-1.459.686-2.231 1.201.258-.171.515-.257.858-.429-.429 0-2.488.944-3.517 1.373.343.086 2.488-.687 3.689-1.116-.858.515-2.317 1.03-3.518 1.716.258-.514-3.002 1.03-4.461 1.63-1.716.6-1.716 1.116-2.231 1.287-.085-.171-2.659 1.116-1.544.343.515-.257 1.373-.428 2.231-.943-1.115.343-1.116 0-3.26 1.2-1.63.859.686.43-2.574 1.63.772-.428.944-.6 1.544-1.029l-3.088 1.201v.344c-.429.085-.172 0-.344 0-.772.686-4.547 2.144-5.147 2.745-1.544.686-3.346 1.201-4.89 1.716l.257-.172c-.944.258-2.059.687-3.003 1.116-1.029.428-1.973.772-2.745 1.2l.086-.085c-.515.171-1.373.429-2.231.772-.858.257-1.802.6-2.402.858-2.66.515-1.201-.858-4.032.171-2.66.687-4.118 1.373-3.003 1.373l-3.861.515c-1.287.172-2.659.257-3.946.343l-.944.086h-2.917c-1.287-.086-2.488-.172-3.603-.429-.686.086-.258.171-1.802.086-3.689-.515-7.464-1.201-11.067-2.145-3.518-.944-6.863-2.145-9.437-3.346 2.059.6.257-.257.257-.429-1.716-.343-1.802-1.03-2.574-.772.086.343-.171.343 1.716 1.201-4.118-1.373-10.123-3.947-12.182-5.148 1.029.601.171.344-.773 0 .429-.257-2.402-1.63-4.632-2.402l-.429.086-1.287-.858c-.858-.257-1.116.086-3.175-1.03-.085-.171-.171-.257-.514-.514-2.317-.772-5.663-1.716-8.065-2.917-.6-.43-1.287-.772-1.887-1.115-1.03-.344-2.917-.772-1.116 0-4.118-1.716-6.949-2.488-8.236-3.175-3.86-.6-8.493-1.287-13.298-1.458H235.844c-1.201.086-2.402.171-3.603.171-.257 0-.601 0-.858.086l-.858.086c-.601.086-1.201.172-1.716.257-1.115.172-2.316.258-3.346.515l.258-.257c-2.403.343-1.116.6-2.831.772.686-.343-1.888 0-.086-.687-.858.086-1.545.258-2.145.515a8.222 8.222 0 00-1.544.6c-.858.43-1.63.687-2.66 1.116-.086.172.257 0 .686-.171.429-.172.773-.258.687-.086-.343.171-4.633 1.287-4.976 1.801-.858.086-.343-.343.086-.686-.687.257-1.287.6-1.888.858-1.287.257 0-.515 1.287-1.201s2.66-1.373 1.201-1.201l-1.887.686c-1.888.172 4.804-2.145.085-.686-1.973.944-3.431 2.145-1.63 1.63-4.118 1.63-1.63 1.63-6.005 3.346-1.287.257 3.517-1.459 2.574-1.459-2.231.515-4.118 1.888-6.006 2.574 2.145-.772.515.343-.772 1.03-2.316.772 1.287-.944-1.887.343-.429.429-3.346 1.887-.687.944-.943.943-3.346 1.286-4.976 2.402-1.201.085 3.003-2.145-.6-.858.686.085-4.204 2.23-2.145 1.973-1.459.515-1.716.257-.772-.343-2.059.6-4.633 2.574-5.577 2.145l-.6.6c-.687.086-1.63.343-2.746.6-.858.344-2.316.944-3.517 1.373-1.201.43-2.145.773-2.145.43-.515.257-4.804 1.286-3.089 1.286 1.373-.257 2.145-.515 2.746-.686.6-.258 1.029-.343 1.887-.343-1.973.257-3.775 1.115-5.319 1.716l-.343-.172c-.429.172-1.201.429-1.887.515-.687.171-1.373.343-1.631.514.687-.257.258-.343-.428-.257l-.944.515c-1.888.429-2.145.257-2.402.172-.258-.086-.429-.258-2.317 0l2.831-.601c-.6.086-1.887 0-3.689.257-.343.172-.858.43-1.287.6-.514.172-.943.344-1.287.43-2.144.171-.943-.258-3.088.086.944-.086 1.802-.258 2.745-.43.172-.085-.257-.171-1.115-.257-.429 0-.944-.085-1.544-.085-.601-.086-1.287-.086-1.973-.086-1.802.085-4.633.257-1.802.686-1.459-.086-3.432-.429-2.231-.515-3.174-.171.429.343-2.402.258-.515-.172-1.716-.43-2.917-.687-1.287-.343-2.574-.686-3.603-1.03h2.917l-1.888-.342c2.488 0-1.201-.515.258-.687-1.287-.257-2.831-.429-4.033-.6 1.802.686.687.686-.686.686-1.458-.086-3.174-.257-2.659.172-2.574-.515-3.261-1.116-3.947-1.545-.772-.514-1.544-.858-4.204-1.115.772.429-1.801.172 1.373.858-3.089-.944-2.231 0-5.834-1.287 2.745.6-2.66-1.458 1.287-.6-.343.085 2.145.772 2.745.857-1.201-.6.429-.514-2.659-1.458-1.888-.515-4.547-1.287-4.204-.858 0 .343 2.917.858 1.63.858-3.861-1.03-4.29-1.716-6.006-1.63 2.403.686 2.917 1.201 2.746 1.458l-2.831-.686.6-.086c-4.375-1.544-1.458 0-5.748-1.372l-1.887-1.03c1.115-.086 6.177 2.06 5.576 1.201-2.745-.858-3.775-.858-6.349-1.801.601.085 1.373.343 1.974.428-1.03-.257-1.716-1.458-5.92-2.059-2.145-.343-.601.086-.686.258-4.547-1.115-5.92-1.115-8.837-1.63.686-.343-5.148-.944-1.887-.858 1.458.429 7.978 1.887 9.694 1.887-.772-.429.172-.257 1.373.086 1.201.343 2.745.772 3.26.687-3.603-1.03-3.26-1.459-3.775-1.974-1.03-.257-2.059-.343-2.66-.429-.514.258.858.515.773.858-1.974-.6-4.033-.944-5.834-1.287-1.802-.257-3.346-.429-4.547-.429-1.373-.429-.858-.686.772-.429-4.89-.686-10.21-1.372-14.842-1.715 1.544.343.171.343-1.201.257-1.459 0-3.003-.086-1.974.171.6.086 1.201.086 1.802.172.515.086 1.03.172 1.287.257.686.172.858.344.171.43-1.544-.172.086-.258-.6-.43-1.973.172-3.089-.6-5.062-.171 4.547-.086.858-.687 1.716-1.03-3.26.172.172-.343-3.088-.343-3.26.258-7.293.515-10.896.944-1.115 0-2.402 0-3.775.171a567.21 567.21 0 01-4.204.515c-1.373.258-2.745.515-4.032.687-1.287.257-2.402.514-3.432.686-2.145.171-.858-.6-3.088-.172-2.66.6 2.059.086-1.888.773l.343-.172c-.6.172-2.402.515-4.203 1.03-.859.257-1.802.514-2.489.771-.686.258-1.286.515-1.458.773l1.03-.858c-.773.171-1.373.514-1.974.772-.086-.172-.943-.086.172-.515-2.488.343-4.976 1.716-7.464 2.574l1.716-.258c-2.145.858-3.947 1.63-5.834 2.145-1.888.6-3.775 1.03-6.091 1.201l.085-.343c-.858.086-1.801.086-2.745.086.343-.086-.086-.257-.772-.515-.686-.257-1.544-.6-2.23-.858 2.144 1.03 4.546.944 6.777.43.944 0 .429.17-.172.343-.6.171-1.287.343-.686.429.515.085 1.887 0 3.088-.344 1.202-.343 2.317-.772 2.66-1.03-1.544.43-1.544.515-2.745.944-.6-.257 1.716-.857 2.745-1.544-.772.258-1.887.515-2.059.687 1.459-.601 3.003-1.202 5.577-2.145-1.716.772 1.03-.086.428.257.086-.429 2.488-1.458 5.749-2.402 1.2-.172 2.745-.686 4.375-1.287 1.716-.515 3.518-1.287 5.49-1.63-1.458.686-3.345 1.544-5.576 2.316 2.402-.429 2.66-.772 5.062-1.115 1.115-.515 1.802-1.201 4.89-1.973l.258.257c2.83-.686 2.745-1.115 6.434-1.63 6.349-.858 12.869-1.287 17.673-1.372l.172.257c2.66-.686 9.008-.172 12.611-.172 3.089.344 6.435.687 9.352 1.03a43.62 43.62 0 014.032.686c1.201.258 2.23.43 3.003.772 10.81 1.973 19.818 4.976 30.542 8.236l-1.887-.171c1.973.257 1.201.6 3.088 1.115-2.059-.944 2.746.343 4.118.43 4.719 1.63 11.068 2.659 15.357 2.916l.172.257c4.461 0 9.609.773 15.099.344.601.085 1.63.171 3.26 0 2.832-1.03 4.376-1.202 8.58-2.574.343-.086.772-.172 1.201-.343.429-.172.858-.258 1.372-.43.944-.257 1.974-.6 3.003-.857 1.973-.687 4.032-1.287 5.577-1.802 11.067-4.89 22.392-10.21 34.746-14.242l1.029.086c.772-.257 1.459-.514 2.231-.772.772-.257 1.544-.429 2.402-.6 1.63-.43 3.26-.773 4.976-1.03 1.716-.257 3.346-.515 5.148-.6 1.715-.086 3.431-.258 5.147-.086 3.432.086 6.778.514 9.866 1.115 3.089.6 6.006 1.287 8.58 1.973l-1.116.258c3.175 1.03 7.293 2.23 6.606 1.544 3.089 1.287 7.893 2.745 9.695 4.032 3.088 1.459 3.946 1.373 6.52 2.488 6.091 2.917 8.408 3.947 14.242 6.263l-1.459-.6c-.686-.172-.858 0 .601.686 2.23.772 7.979 3.26 6.091 1.802 3.089 1.372 6.778 2.488 10.553 3.345 3.775.858 7.464 1.373 10.638 1.888-.515-.172 1.115-.172 1.716-.258 5.662.258 11.753-.257 16.215-1.715.943-.086-1.373.6.943.085 1.373-.429 0-.257 1.63-.772 4.462-1.458 9.009-3.003 13.384-4.718a261.896 261.896 0 0012.783-5.32c7.121-3.345 14.585-6.52 22.478-8.493 7.893-2.059 16.129-2.574 23.764-2.059l-.171.086c5.147-.086 11.839 1.887 15.957 2.059 1.201.343 4.462 1.03 3.518 1.115 4.032.515 10.81 3.089 16.558 4.204-.515-.172-.772-.257-1.373-.343 5.577 1.887 10.553 2.917 16.387 4.804-.601-.086-1.716-.343-1.888-.257 2.231.858 5.577.858 6.692 1.802 1.287.343 1.029-.086.171-.258 6.435 1.716 13.213 3.003 20.076 3.432 3.432.086 6.863.429 10.381.171l2.574-.085c.858 0 1.716 0 2.573-.172l5.148-.515c.601 0 1.201 0 1.63-.086.515 0 .858-.085 1.201-.085.687 0 1.201-.086 1.544 0 .687 0 .687.171.601.257-.086.172-.429.257 3.432-.515.686 0 .429-.343.515-.171 3.002-.687 4.804-.086 6.777-.772-.944-.258 1.373-.43 1.373-.687 6.005-1.03 7.292-.858 11.925-2.316l-.343.257a34.08 34.08 0 014.204-1.287c1.458-.429 2.831-.858 4.289-1.287 2.831-.772 5.577-1.63 7.807-2.573 7.55-2.06 15.1-4.118 22.65-5.834 3.775-.944 7.55-1.63 11.41-2.402 1.888-.344 3.861-.601 5.748-.944l2.831-.43 2.917-.342c1.888-.172 3.861-.43 5.748-.6l5.834-.344c3.861-.172 7.808-.086 11.668.086 7.722.429 15.443 1.544 22.993 2.917 15.013 2.917 29.427 6.949 43.926 10.295 14.499 3.26 29.169 6.005 44.183 5.834.858 0 1.63.085 2.316.085h1.888c1.201 0 2.144 0 3.088-.085.944-.086 1.973-.172 3.26-.343 1.201-.258 2.66-.43 4.547-.858-.257.171-.772.257-.257.257.172-.257 1.458-.515 2.831-.858.686-.172 1.373-.257 1.973-.429.601-.171 1.03-.343 1.116-.515 10.81-2.573 20.418-6.52 31.4-10.466-1.716.686-2.488 1.372-.429.6l2.059-1.03h.429c1.373-.6 2.917-1.286 1.372-.943 6.95-2.488 14.07-4.719 21.449-6.091 1.887-.343 3.689-.687 5.576-.772l2.831-.258c.944-.086 1.888-.086 2.831-.086l2.832-.085c.943 0 1.887.085 2.831.171l2.831.172c.944.086 1.887.257 2.831.343 15.014 2.23 28.054 9.008 41.781 11.582.772.171 1.63.429 2.574.6.858.172 1.802.258 2.745.43.944.171 1.974.343 2.917.428l3.089.258c4.118.343 8.322.343 11.925.343 5.405.086 10.638-.086 15.872-.6l1.973-.172 1.973-.257c1.287-.172 2.574-.344 3.861-.43 2.574-.428 5.147-.686 7.721-1.2 10.295-1.716 20.505-4.204 31.229-7.121 0 0-.601.429-2.402 1.2-1.974.087-4.805 1.202-9.266 2.403zM2.059 21.23c.257.686 2.145 2.316.429 1.286 0-.171-.257-.515-.343-.772-.172-.257-.258-.515-.086-.515z"
        fill="#99D6CC"
      />
      <path
        d="M67.347 15.31c.086-.086.944.085 1.201.171-.858 0-1.63.172-2.23.086.772-.086.6-.172 1.03-.258zM84.506 16.682c-.172.086-1.115 0-2.317-.086-1.2-.085-2.66-.171-3.774-.257 1.973.086 4.032.172 6.09.343zM99.948 20.543c1.287.515.858.515-.857 0-.086-.086.514 0 .858 0zM101.15 20.457c1.287.343 1.887.6 2.488.944.085-.258-3.003-.772-2.488-.944zM135.038 30.666c.858.172 2.745.43 3.431.773-.772-.344-4.118-.601-3.431-.773zM151.767 32.554c.515 0 .772.086 1.373 0 1.03.086-.086.257-.944.257l-.429-.257zM437.286 15.395l-1.716-.429.257-.085 1.459.514zM565.889 14.28c1.716-.515 1.201-.086 1.544-.172-1.544.344.515-.429-1.544.172zM635.124 7.502l-.515-.085.171-.344.344.43z"
        fill="#99D6CC"
      />
    </svg>
  )
}

export default Divider