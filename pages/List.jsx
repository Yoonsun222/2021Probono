import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon, Text, Card, CardItem } from 'native-base';

export default function List({ navigation, content }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailPage');
      }}
      style={styles.container}
    >
      <Card style={styles.card} transparent>
        <CardItem style={{ marginTop: -10 }}>
          <Grid>
            <Col size={9}>
              <Text numberOfLines={1} style={styles.title}>
                {content.title}
              </Text>
              <Text style={[styles.grey, styles.writer]}>{content.author}</Text>
            </Col>
            <Col size={2}>
              <Grid>
                <Col>
                  <Icon name="chatbox-outline" style={styles.grey} />
                </Col>
                <Col>
                  <Icon name="heart-outline" style={styles.grey} />
                </Col>
              </Grid>
            </Col>
          </Grid>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', alignSelf: 'center' },
  card: {
    width: '100%',
    alignSelf: 'center',
  },
  image: { height: 200, width: '100%', borderRadius: 10 },
  grey: { color: 'grey' },
  writer: { fontSize: 12, color: 'grey', marginLeft: 10 },
  title: { fontWeight: '700', fontSize: 15, marginLeft: 10 },
});