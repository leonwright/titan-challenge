import re
import xml.etree.ElementTree as ET


def remove_spaces_and_symbols(string):
    string = string.replace(" ", "")
    string = re.sub(r'[^\w]', ' ', string)
    return string


def convert_demographics(element, data):
    for key, value in data.items():
        # remove spaces and symbols from key
        key = remove_spaces_and_symbols(key)

        ET.SubElement(element, key).text = value


def convert_clinical_data(element, data):
    for clinical_data in data:
        for key, value in clinical_data.items():
            # remove spaces and symbols from key
            key = remove_spaces_and_symbols(key)
            single_clinical_data_inner = ET.SubElement(
                element, key)
            for sub_value in value:
                clinical_data_data = ET.SubElement(
                    single_clinical_data_inner, "Data")
                for sub_key, sub_value in sub_value.items():
                    # remove spaces and symbols from key
                    sub_key = remove_spaces_and_symbols(sub_key)
                    ET.SubElement(clinical_data_data,
                                  sub_key).text = str(sub_value)
