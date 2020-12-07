import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { BasicStyles } from 'common'

class TermsAndConditions extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.TermsAndConditionsContainer}>
          <View style={styles.SectionContainer}>
            <View style={styles.SectionTitleContainer}>
              <Text style={styles.SectionTitleTextStyle}>
                Terms & Conditions
              </Text>
            </View>
            <View style={styles.SectionDescriptionContainer}>
              <Text style={styles.SectionDescriptionTextStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                nec dui nec lacus lacinia volutpat. Morbi semper quam at felis
                convallis dignissim. Aenean iaculis sollicitudin sollicitudin.
                Maecenas consequat congue tortor et volutpat. Ut non maximus
                odio. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Suspendisse potenti. Quisque
                iaculis fringilla elit quis varius. Pellentesque at sollicitudin
                augue. Maecenas sit amet luctus diam, non congue velit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui
                nec lacus lacinia volutpat. Morbi semper quam at felis convallis
                dignissim. Aenean iaculis sollicitudin sollicitudin. Maecenas
                consequat congue tortor et volutpat. Ut non maximus odio.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Suspendisse potenti. Quisque
                iaculis fringilla elit quis varius. Pellentesque at sollicitudin
                augue. Maecenas sit amet luctus diam, non congue velit.
              </Text>
            </View>
          </View>
          <View style={[styles.SectionContainer, { marginTop: 25 }]}>
            <View style={styles.SectionTitleContainer}>
              <Text style={styles.SectionTitleTextStyle}>Privacy Policy</Text>
            </View>
            <View style={styles.SectionDescriptionContainer}>
              <Text style={styles.SectionDescriptionTextStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                nec dui nec lacus lacinia volutpat. Morbi semper quam at felis
                convallis dignissim. Aenean iaculis sollicitudin sollicitudin.
                Maecenas consequat congue tortor et volutpat. Ut non maximus
                odio. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Suspendisse potenti. Quisque
                iaculis fringilla elit quis varius. Pellentesque at sollicitudin
                augue. Maecenas sit amet luctus diam, non congue velit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui
                nec lacus lacinia volutpat. Morbi semper quam at felis convallis
                dignissim. Aenean iaculis sollicitudin sollicitudin. Maecenas
                consequat congue tortor et volutpat. Ut non maximus odio.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Suspendisse potenti. Quisque
                iaculis fringilla elit quis varius. Pellentesque at sollicitudin
                augue. Maecenas sit amet luctus diam, non congue velit.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  TermsAndConditionsContainer: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '8.5%',
    paddingVertical: '3%',
  },
  SectionContainer: {
    width: '100%',
  },
  SectionTitleContainer: {},
  SectionTitleTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  SectionDescriptionContainer: {},
  SectionDescriptionTextStyle: {
    textAlign: 'justify',
  },
});

export default TermsAndConditions;
