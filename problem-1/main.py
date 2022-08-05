from PyPDF2 import PdfFileReader, PdfFileWriter
from PIL import Image
from os import path
import pytesseract
# STEP 1
# import libraries

# STEP 2
# file path you want to extract images from
file = path.join(path.dirname(__file__),
                 '../source_files/hightlightme.pdf')
pdf_file = open(file, 'rb')
cond_scan_reader = PdfFileReader(pdf_file)
page = cond_scan_reader.getPage(0)

# STEP 3
# iterate over PDF pages
xObject = page['/Resources']['/XObject'].getObject()
i = 0
for obj in xObject:
    # print(xObject[obj])
    if xObject[obj]['/Subtype'] == '/Image':
        if xObject[obj]['/Filter'] == '/DCTDecode':
            data = xObject[obj]._data
            img = open("{}".format(i) + ".jpg", "wb")
            img.write(data)
            print(pytesseract.image_to_string(
                Image.open("{}".format(i) + ".jpg")))
            img.close()
            i += 1
