/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    /**
     * Below is a monster method that runs tests on a model defined in desc
     * @param desc The model definition
     * @param desc.model_name The name of the model, should be found in db[ desc.model_name ] (db should be global)
     * @param desc.fixture_name The name of the fixture (for fixture_name) Also assumed that the fixture key is equal to the fixture name
     * @param desc.valid {Object} valid object, used for create tests
     * @param desc.fields {Object} List of fields
     * @param desc.fields[key] Name of field
     * @param desc.fields[key].valid {Array} Valid values for the field (Each will be tested on valid step)
     * @param desc.fields[key].invalid {Array} Invalid values for the field (All tested on invalid step)
     */
    module.exports = function( desc ) {
        describe( 'create', function() {
            it( 'Valid', function *() {
                var created = yield db[ desc.model_name ].create( desc.valid );
                assert.isDefined( created );
            } );

            describe( 'Validations', function() {
                _
                    .each( desc.fields, function( field_desc, field_name ) {
                        describe( field_name, function() {
                            _
                                .each( field_desc.invalid, function( value ) {
                                    it_throws( '' + value, 'SequelizeValidationError', function *() {
                                        yield create_validate( db[ desc.model_name ], desc.valid, field_name, value );
                                    } );
                                } );
                        } );
                    } );
            } );
        } );

        describe( 'updateAttributes', function() {
            _
                .each( desc.fields, function( field_desc, field_name ) {
                    describe( field_name, function() {
                        describe( 'Valid', function() {
                            _
                                .each( field_desc.valid, function( value ) {
                                    it( '' + value, function *() {
                                        var test_fixtures = yield fixtures.load( [ desc.fixture_name ] );

                                        var update_body = {};
                                        update_body[ field_name ] = value;

                                        yield test_fixtures[ desc.fixture_name ]
                                            .updateAttributes( update_body );

                                        var found = yield db[ desc.model_name ]
                                            .find( {
                                                where: {
                                                    id: test_fixtures[ desc.fixture_name ].id
                                                }
                                            } );

                                        found = found.get();

                                        assert.propertyVal( found, field_name, value );
                                    } );
                                } );
                        } );

                        describe( 'Invalid', function() {
                            _
                                .each( field_desc.invalid, function( value ) {
                                    it_throws( '' + value, 'SequelizeValidationError', function *() {
                                        var test_fixtures = yield fixtures.load( [ desc.fixture_name ] );

                                        var update_body = {};
                                        update_body[ field_name ] = value;

                                        yield test_fixtures[ desc.fixture_name ]
                                            .updateAttributes( update_body );
                                    } );
                                } );
                        } );
                    } );
                } );
        } );
    };
})();