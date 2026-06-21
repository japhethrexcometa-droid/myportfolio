from PIL import Image

def make_white_transparent(image_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        # If the pixel is close to white, make it transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(image_path, "PNG")

make_white_transparent("c:/myportfolio/public/assets/languages/mysql.png")
print("Successfully made mysql.png background transparent.")
