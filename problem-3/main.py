import argparse
import json
import os
import xml.etree.ElementTree as ET
import utils.xml as xml_utils

filename = os.path.join(os.path.dirname(__file__),
                        '../source_files/sampledata-multiple.json')

f = open(filename, "r")

data = json.load(f)
# root xml element
root = ET.Element("Entities")


for entity in data['Entities']:
    # root xml element for each entity
    entity_root = ET.SubElement(root, "Entity")

    # subelements
    demographics = ET.SubElement(entity_root, "Demographics")
    clinical_data = ET.SubElement(entity_root, "ClinicalData")

    # convert subelements and add to xml tree
    xml_utils.convert_demographics(demographics, entity['Demographics'])
    xml_utils.convert_clinical_data(clinical_data, entity['Clinical Data'])

xml_filename = f.name.replace('.json', "")

tree = ET.ElementTree(root)
tree.write(xml_filename + '.xml')
