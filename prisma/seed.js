import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await prisma.log.deleteMany();
    await prisma.session.deleteMany();
    await prisma.device.deleteMany();

    // Create devices
    console.log('📱 Creating devices...');
    const device1 = await prisma.device.create({
        data: {
            deviceKey: 'Samsung Galaxy S21',
            platform: 'android',
        },
    });

    const device2 = await prisma.device.create({
        data: {
            deviceKey: 'iPhone 13 Pro',
            platform: 'ios',
        },
    });

    const device3 = await prisma.device.create({
        data: {
            deviceKey: 'Google Pixel 6',
            platform: 'android',
        },
    });

    const device4 = await prisma.device.create({
        data: {
            deviceKey: 'OnePlus 9',
            platform: 'android',
        },
    });

    console.log(`✅ Created ${4} devices`);

    // Create sessions for device1
    console.log('📝 Creating sessions for device1...');
    const session1_1 = await prisma.session.create({
        data: {
            deviceId: device1.id,
            sessionId: '1',
            appVersion: '1.0.0',
            buildNumber: '100',
        },
    });

    const session1_2 = await prisma.session.create({
        data: {
            deviceId: device1.id,
            sessionId: '2',
            appVersion: '1.0.1',
            buildNumber: '101',
        },
    });

    // Create sessions for device2
    console.log('📝 Creating sessions for device2...');
    const session2_1 = await prisma.session.create({
        data: {
            deviceId: device2.id,
            sessionId: '1',
            appVersion: '1.0.0',
            buildNumber: '100',
        },
    });

    const session2_2 = await prisma.session.create({
        data: {
            deviceId: device2.id,
            sessionId: '2',
            appVersion: '1.0.2',
            buildNumber: '102',
        },
    });

    // Create sessions for device3
    console.log('📝 Creating sessions for device3...');
    const session3_1 = await prisma.session.create({
        data: {
            deviceId: device3.id,
            sessionId: '1',
            appVersion: '1.0.0',
            buildNumber: '100',
        },
    });

    // Create sessions for device4
    console.log('📝 Creating sessions for device4...');
    const session4_1 = await prisma.session.create({
        data: {
            deviceId: device4.id,
            sessionId: '1',
            appVersion: '1.0.0',
            buildNumber: '100',
        },
    });

    const session4_2 = await prisma.session.create({
        data: {
            deviceId: device4.id,
            sessionId: '2',
            appVersion: '1.0.1',
            buildNumber: '101',
        },
    });

    const session4_3 = await prisma.session.create({
        data: {
            deviceId: device4.id,
            sessionId: '3',
            appVersion: '1.0.2',
            buildNumber: '102',
        },
    });

    console.log(`✅ Created ${8} sessions`);

    // Create logs for session1_1 (device1)
    console.log('📋 Creating logs for session1_1...');
    const logs1_1 = [
        { level: 'INFO', message: 'App started successfully' },
        { level: 'DEBUG', message: 'Initializing components' },
        { level: 'INFO', message: 'User logged in' },
        { level: 'WARNING', message: 'Slow network detected' },
        { level: 'ERROR', message: 'Failed to load user profile' },
        { level: 'INFO', message: 'Retrying connection...' },
        { level: 'INFO', message: 'Connection restored' },
    ];

    for (const log of logs1_1) {
        await prisma.log.create({
            data: {
                sessionId: session1_1.id,
                deviceKey: device1.deviceKey,
                level: log.level,
                message: log.message,
            },
        });
    }

    // Create logs for session1_2 (device1)
    console.log('📋 Creating logs for session1_2...');
    const logs1_2 = [
        { level: 'INFO', message: 'App updated to version 1.0.1' },
        { level: 'DEBUG', message: 'Checking for updates' },
        { level: 'INFO', message: 'Settings synced' },
        { level: 'WARNING', message: 'Battery level low' },
    ];

    for (const log of logs1_2) {
        await prisma.log.create({
            data: {
                sessionId: session1_2.id,
                deviceKey: device1.deviceKey,
                level: log.level,
                message: log.message,
            },
        });
    }

    // Create logs for session2_1 (device2)
    console.log('📋 Creating logs for session2_1...');
    const logs2_1 = [
        { level: 'INFO', message: 'iOS app launched' },
        { level: 'DEBUG', message: 'Loading user preferences' },
        { level: 'INFO', message: 'Home screen loaded' },
        { level: 'INFO', message: 'Fetching data from API' },
        { level: 'ERROR', message: 'API request timeout' },
        { level: 'INFO', message: 'Cache data loaded' },
    ];

    for (const log of logs2_1) {
        await prisma.log.create({
            data: {
                sessionId: session2_1.id,
                deviceKey: device2.deviceKey,
                level: log.level,
                message: log.message,
            },
        });
    }

    // Create logs for session2_2 (device2)
    console.log('📋 Creating logs for session2_2...');
    const logs2_2 = [
        { level: 'INFO', message: 'App updated to version 1.0.2' },
        { level: 'DEBUG', message: 'New features enabled' },
        { level: 'INFO', message: 'Background sync started' },
    ];

    for (const log of logs2_2) {
        await prisma.log.create({
            data: {
                sessionId: session2_2.id,
                deviceKey: device2.deviceKey,
                level: log.level,
                message: log.message,
            },
        });
    }

    // Create logs for session3_1 (device3)
    console.log('📋 Creating logs for session3_1...');
    const logs3_1 = [
        { level: 'INFO', message: 'Pixel device initialized' },
        { level: 'DEBUG', message: 'Camera permissions granted' },
        { level: 'INFO', message: 'Location services enabled' },
        { level: 'WARNING', message: 'GPS signal weak' },
        { level: 'INFO', message: 'Map view loaded' },
    ];

    for (const log of logs3_1) {
        await prisma.log.create({
            data: {
                sessionId: session3_1.id,
                deviceKey: device3.deviceKey,
                level: log.level,
                message: log.message,
            },
        });
    }

    // Create logs for session4_1 (device4)
    console.log('📋 Creating logs for session4_1...');
    const logs4_1 = [
        { level: 'INFO', message: 'OnePlus device started' },
        { level: 'DEBUG', message: 'Performance mode activated' },
        { level: 'INFO', message: 'Notifications enabled' },
    ];

    for (const log of logs4_1) {
        await prisma.log.create({
            data: {
                sessionId: session4_1.id,
                deviceKey: device4.deviceKey,
                level: log.level,
                message: log.message,
            },
        });
    }

    // Create logs for session4_2 (device4)
    console.log('📋 Creating logs for session4_2...');
    const logs4_2 = [
        { level: 'INFO', message: 'Session 2 started' },
        { level: 'ERROR', message: 'Payment processing failed' },
        { level: 'WARNING', message: 'Network unstable' },
        { level: 'INFO', message: 'Retrying payment...' },
        { level: 'INFO', message: 'Payment successful' },
    ];

    for (const log of logs4_2) {
        await prisma.log.create({
            data: {
                sessionId: session4_2.id,
                deviceKey: device4.deviceKey,
                level: log.level,
                message: log.message,
            },
        });
    }

    // Create logs for session4_3 (device4)
    console.log('📋 Creating logs for session4_3...');
    const logs4_3 = [
        { level: 'INFO', message: 'Latest version installed' },
        { level: 'DEBUG', message: 'All features unlocked' },
        { level: 'INFO', message: 'User profile updated' },
        { level: 'INFO', message: 'Data backup completed' },
    ];

    for (const log of logs4_3) {
        await prisma.log.create({
            data: {
                sessionId: session4_3.id,
                deviceKey: device4.deviceKey,
                level: log.level,
                message: log.message,
            },
        });
    }

    const totalLogs = logs1_1.length + logs1_2.length + logs2_1.length + logs2_2.length +
        logs3_1.length + logs4_1.length + logs4_2.length + logs4_3.length;
    console.log(`✅ Created ${totalLogs} logs`);

    console.log('\n✨ Seed completed successfully!');
    console.log(`📊 Summary:`);
    console.log(`   - Devices: 4`);
    console.log(`   - Sessions: 8`);
    console.log(`   - Logs: ${totalLogs}`);
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

