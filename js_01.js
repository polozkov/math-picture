//we will draw mathematical picture Pixel by Pixel
var main_canvas = window.document.getElementById('idCanvas');
var main_ctx = main_canvas.getContext('2d');

var SIZE_X = document.documentElement.clientWidth;
var SIZE_Y = document.documentElement.clientHeight;

//maximize canvas sizes to inscribe it in client area
main_canvas.width = SIZE_X;
main_canvas.height = SIZE_Y;

//data of each pixel for manipulating Pixel by Pixel
var main_image_data = main_ctx.createImageData(SIZE_X, SIZE_Y);
var main_final_data = main_image_data.data;

var T = [0, 0, 0];
var i_rgba = -4;

//work with all pixels on canvas
for (var iy = 0; iy < SIZE_Y; iy++) {
    for (var ix = 0; ix < SIZE_X; ix++) {
        i_rgba += 4;

        //start from [real 0..1, real 0..1 and zero]
        T = [ix / SIZE_X, iy / SIZE_Y, 0];

        //step function 
        for (var step = 0; step < 6; step++) {
            T = [
                T[0] * T[0] * T[0] - T[1], // new_x = x * x * x - y;
                T[1] * T[1] * T[1] + T[2], // new_y = y * y * y + z;
                T[2] * T[2] * T[2] + T[0]  // new_z = z * z * z + x;
            ];

            //makeeach element in border (0 <= ELEMENT < 1)
            T = [
                T[0] - Math.floor(T[0]),
                T[1] - Math.floor(T[1]),
                T[2] - Math.floor(T[2])
            ];
        };

        //elements of T convert to integer byte 0..255
        main_final_data[i_rgba + 0] = Math.floor(T[0] * 256);
        main_final_data[i_rgba + 1] = Math.floor(T[1] * 256);
        main_final_data[i_rgba + 2] = Math.floor(T[2] * 256);

        //Alpha compositing is miximum VISIBLE (max = 255)
        main_final_data[i_rgba + 3] = 255;
    };
};

main_ctx.putImageData(main_image_data, 0, 0);