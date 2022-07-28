import json
import os
import re
import xml.etree.ElementTree as ET


script_dir = os.path.dirname(__file__)

f = open(os.path.join(script_dir, '../source_files/sampledata.json'), "r")

data = json.load(f)
# create root element
root = ET.Element("Entities")


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


for entity in data['Entities']:
    demographics = ET.SubElement(root, "Demographics")
    clinical_data = ET.SubElement(root, "ClinicalData")
    convert_demographics(demographics, entity['Demographics'])

    clinical_data_json = entity['Clinical Data']
    convert_clinical_data(clinical_data, clinical_data_json)


tree = ET.ElementTree(root)
tree.write("test.xml")
